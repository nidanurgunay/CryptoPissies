pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./ERC721Full.sol";

contract Pisi is ERC721Full {
    // string[] public colors;
    // mapping(string => bool) _colorExists;

    struct PisiAttributes {
        string eyeColor;
        string eyeSize;
        
        string headColor;
        string headSize;
        
        string beardSize;
        
        string tailColor;
        string tailAccentColor;
        string tailSize;
        
        string bodyColor;
        string bodyAccentColor;

        string stripeType;
        
        string hungerness;
        string fragility;
        string fertility;
        string appeal;

        address payable owner;
        uint256 price;
        bool onSale;
    }
    
    mapping(string => PisiAttributes) _pisiCollection;
    mapping(address => string[]) _personalCollection;
    mapping(address => uint8) _personalCollectionSize;

    string[] public _pisiHashesToSell;
    uint256 public onSaleCount;

    constructor() ERC721Full("Pisi", "PISI") public {

    }

    function mint(string memory _color) public {
        // // Require unique color
        // require(!_colorExists[_color]);
        // // Color - add it
        // uint _id = colors.push(_color);
        // // Call the mint function
        // _mint(msg.sender, _id);
        // // Color - track it
        // _colorExists[_color] = true;
    }

    function decodeAttributes(string memory hashedAttr, address payable owner) internal returns (string memory){
        PisiAttributes memory pa = PisiAttributes(
            getNumberBetween(hashedAttr, 0, 6), // eyeColor, 
            getNumberBetween(hashedAttr, 6, 8), // eyeSize, 
            
            getNumberBetween(hashedAttr, 8, 14), // headColor, 
            getNumberBetween(hashedAttr, 14, 16), // headSize, 
            
            getNumberBetween(hashedAttr, 16, 18), // beardSize, *****
            
            getNumberBetween(hashedAttr, 18, 24), // tailColor, 
            getNumberBetween(hashedAttr, 24, 30), // tailAccentColor, *****
            getNumberBetween(hashedAttr, 30, 32), // tailSize, 
            
            getNumberBetween(hashedAttr, 32, 38), // bodyColor, 
            getNumberBetween(hashedAttr, 38, 44), // bodyAccentColor, 
    
            getNumberBetween(hashedAttr, 44, 46), // stripeType, 

            getNumberBetween(hashedAttr, 46, 48), // hungerness, 
            getNumberBetween(hashedAttr, 48, 50), // fragility, 
            getNumberBetween(hashedAttr, 50, 52), // fertility, 
            getNumberBetween(hashedAttr, 52, 54), // appeal

            owner,
            0,
            false
        );

        _pisiCollection[hashedAttr] = pa;
        _personalCollection[owner].push(hashedAttr);
        _personalCollectionSize[owner]++;

        return hashedAttr;
    }

    function testAttributes(string memory hashedAttr) public returns (string memory) {
        address(this).delegatecall(abi.encodeWithSignature("decodeAttributes(string, address payable)", hashedAttr, msg.sender));

        return decodeAttributes(hashedAttr, msg.sender);
    }

    function randomAttributes() public returns (string memory) {
        uint256 rand = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender)));

        return decodeAttributes(uint2str(rand), msg.sender);
    }

    function putToSale(string memory pisiHash, uint256 price) public {
        require(_pisiCollection[pisiHash].owner == msg.sender);

        _pisiCollection[pisiHash].price = price;
        _pisiCollection[pisiHash].onSale = true;
        onSaleCount += 1;
        
        _pisiHashesToSell.push(pisiHash);
    }

    function putDownFromSale(string memory pisiHash) public {
        require(_pisiCollection[pisiHash].owner == msg.sender);

        removeElement(pisiHash, msg.sender);
    }

    function transferPisi(string memory pisiHash) public payable {
        require(_pisiCollection[pisiHash].price <= msg.value);
        require(_pisiCollection[pisiHash].onSale == true);

        address oldOwner = _pisiCollection[pisiHash].owner;

        _pisiCollection[pisiHash].owner = msg.sender;

        removeElement(pisiHash, msg.sender);

        removeElementFromArray(pisiHash, _personalCollection[oldOwner], _personalCollectionSize[oldOwner]);
        _personalCollectionSize[oldOwner]--;

        _personalCollection[msg.sender].push(pisiHash);
        _personalCollectionSize[msg.sender]++;
    }

    function gatherPersonalPisis() public view returns (string[] memory, uint8) {
        return (_personalCollection[msg.sender], _personalCollectionSize[msg.sender]);
    }

    // HELPER FUNCTIONS

    function removeElement(string memory pisiHashToRemove, address payable _owner) internal {
        require(_pisiCollection[pisiHashToRemove].owner == _owner);
        require(_pisiCollection[pisiHashToRemove].onSale);
        require(onSaleCount > 0);
        
        _pisiCollection[pisiHashToRemove].price = 0;
        _pisiCollection[pisiHashToRemove].onSale = false;

        removeElementFromArray(pisiHashToRemove, _pisiHashesToSell, onSaleCount);

        onSaleCount -= 1;
    }

    function removeElementFromArray(string memory toRemove, string[] storage removeFrom, uint count) internal {
        bool move = false;

        if(count == 1){
            removeFrom.pop();
        } else{
            for (uint i = 0; i < count - 1; i++){
                if(keccak256(bytes(removeFrom[i])) == keccak256(bytes(toRemove))){
                    move = true;
                }

                if(move){
                    removeFrom[i] = removeFrom[i + 1];
                }
            }
        }
    }
    
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }

    function getEyeColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].eyeColor;
    }

    function getEyeSize(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].eyeSize;
    }

    function getHeadColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].headColor;
    }

    function getHeadSize(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].headSize;
    }

    function getBeardSize(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].beardSize;
    }

    function getTailColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].tailColor;
    }

    function getTailAccentColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].tailAccentColor;
    }

    function getTailSize(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].tailSize;
    }

    function getBodyColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].bodyColor;
    }

    function getBodyAccentColor(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].bodyAccentColor;
    }

    function getStripeType(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].stripeType;
    }

    function getHungerness(string memory pisiHash) public view returns(string memory) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);
        return _pisiCollection[pisiHash].hungerness;
    }

    function getFragility(string memory pisiHash) public view returns(string memory) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);

        return _pisiCollection[pisiHash].fragility;
    }

    function getFertility(string memory pisiHash) public view returns(string memory) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);

        return _pisiCollection[pisiHash].fertility;
    }

    function getAppeal(string memory pisiHash) public view returns(string memory) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);

        return _pisiCollection[pisiHash].appeal;
    }

    function getOwner(string memory pisiHash) public view returns(address) {
        return _pisiCollection[pisiHash].owner;
    }

    function getNumberBetween(string memory str, uint startIndex, uint endIndex) pure internal returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex-startIndex);
        for(uint i = startIndex; i < endIndex; i++) {
            result[i-startIndex] = strBytes[i];
        }
        return string(result);
    }
}