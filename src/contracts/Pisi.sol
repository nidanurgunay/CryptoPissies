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
        
        uint8 hungerness;
        uint8 fragility;
        uint8 fertility;
        uint8 appeal;

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

    function mint() public returns (string memory) {
        uint256 rand = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender)));

        return decodeAttributes(uint2str(rand), msg.sender);
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

            str2Hexuint(getNumberBetween(hashedAttr, 46, 48)), // hungerness, 
            str2Hexuint(getNumberBetween(hashedAttr, 48, 50)), // fragility, 
            str2Hexuint(getNumberBetween(hashedAttr, 50, 52)), // fertility, 
            str2Hexuint(getNumberBetween(hashedAttr, 52, 54)), // appeal

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

    function breed(string memory pisiHash1, string memory pisiHash2) public returns (string memory) {
        require(_pisiCollection[pisiHash1].owner == msg.sender);
        require(_pisiCollection[pisiHash2].owner == msg.sender);
        require(_pisiCollection[pisiHash1].appeal > 0 && _pisiCollection[pisiHash2].appeal > 0);

        uint8 rand = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, _pisiCollection[pisiHash1].fertility, _pisiCollection[pisiHash2].fertility))) % 256);

        require(uint16(rand) < uint16(_pisiCollection[pisiHash1].appeal) + uint16(_pisiCollection[pisiHash2].appeal));

        if (_pisiCollection[pisiHash1].fertility > _pisiCollection[pisiHash2].fertility && _pisiCollection[pisiHash1].appeal > _pisiCollection[pisiHash2].appeal) {
            return decodeAttributes(pisiHash1, msg.sender);
        }else if(_pisiCollection[pisiHash1].fertility > _pisiCollection[pisiHash2].fertility && _pisiCollection[pisiHash1].appeal < _pisiCollection[pisiHash2].appeal) {
            return decodeAttributes(string(abi.encodePacked(getNumberBetween(pisiHash1, 0, 30), getNumberBetween(pisiHash2, 30, 63))), msg.sender);
        } else if(_pisiCollection[pisiHash1].fertility < _pisiCollection[pisiHash2].fertility && _pisiCollection[pisiHash1].appeal > _pisiCollection[pisiHash2].appeal) {
            return decodeAttributes(string(abi.encodePacked(getNumberBetween(pisiHash1, 30, 63), getNumberBetween(pisiHash2, 0, 30))), msg.sender);
        } else {
            return decodeAttributes(pisiHash2, msg.sender);
        }
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

    function str2Hexuint(string memory _input) internal pure returns (uint8) {
        if(keccak256(bytes(_input)) == keccak256(bytes(""))) {
            return 0;
        }

        uint8 res = 0;

        if(bytes(_input)[0] <= 0x39){
            res += (uint8(bytes(_input)[0]) - 0x30) * 16;
        }else {
            res += (uint8(bytes(_input)[0]) - 0x31) * 16;
        }

        if(bytes(_input)[0] <= 0x39){
            res += (uint8(bytes(_input)[1]) - 0x30);
        }else {
            res += (uint8(bytes(_input)[1]) - 0x31);
        }

        return res;
    }

    // function getBodyAttr(string memory pisiHash, uint8 attCode) public view returns(string memory){
    //     require(attCode < 7);

    //     if(attCode == 0){ // eyeColor;
    //         return _pisiCollection[pisiHash].eyeColor;
    //     } else if(attCode == 1){ // eyeSize
    //         return _pisiCollection[pisiHash].eyeSize;
    //     } else if(attCode == 2){ // headColor
    //         return _pisiCollection[pisiHash].headColor;
    //     } else if(attCode == 3){ // headSize
    //         return _pisiCollection[pisiHash].headSize;
    //     } else if(attCode == 4){ // beardSize
    //         return _pisiCollection[pisiHash].beardSize;
    //     } else if(attCode == 5){ // tailColor
    //         return _pisiCollection[pisiHash].tailColor;
    //     } else if(attCode == 6){ // tailAccentColor
    //         return _pisiCollection[pisiHash].tailAccentColor;
    //     } else if(attCode == 6){ // tailSize
    //         return _pisiCollection[pisiHash].tailSize;
    //     } else if(attCode == 6){ // bodyColor
    //         return _pisiCollection[pisiHash].bodyColor;
    //     } else if(attCode == 6){ // bodyAccentColor
    //         return _pisiCollection[pisiHash].bodyAccentColor;
    //     } else if(attCode == 6){ // stripeType
    //         return _pisiCollection[pisiHash].stripeType;
    //     }else {
    //         return "";
    //     }
    // }

    // function getCharAttr(string memory pisiHash, uint8 attCode) public view returns(uint8){
    //     require(_pisiCollection[pisiHash].owner <= msg.sender);
    //     require(attCode < 4);

    //     if(attCode == 0){ // hungerness;
    //         return _pisiCollection[pisiHash].hungerness;
    //     } else if(attCode == 1){ // fragility
    //         return _pisiCollection[pisiHash].fragility;
    //     } else if(attCode == 2){ // fertility
    //         return _pisiCollection[pisiHash].fertility;
    //     } else if(attCode == 3){ // appeal
    //         return _pisiCollection[pisiHash].appeal;
    //     } else {
    //         return 0;
    //     }
    // }

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

    function getHungerness(string memory pisiHash) public view returns(uint8) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);
        return _pisiCollection[pisiHash].hungerness;
    }

    function getFragility(string memory pisiHash) public view returns(uint8) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);

        return _pisiCollection[pisiHash].fragility;
    }

    function getFertility(string memory pisiHash) public view returns(uint8) {
        require(_pisiCollection[pisiHash].owner <= msg.sender);

        return _pisiCollection[pisiHash].fertility;
    }

    function getAppeal(string memory pisiHash) public view returns(uint8) {
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