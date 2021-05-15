pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Pisi is ERC721Full {
    string[] public colors;
    mapping(string => bool) _colorExists;

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
    }
    
    mapping(string => PisiAttributes) _pisiCollection;

    constructor() ERC721Full("Color", "COLOR") public {

    }

    function mint(string memory _color) public {
        // Require unique color
        require(!_colorExists[_color]);
        // Color - add it
        uint _id = colors.push(_color);
        // Call the mint function
        _mint(msg.sender, _id);
        // Color - track it
        _colorExists[_color] = true;
    }

    function decodeAttributes(string memory hashedAttr) public returns (string memory){
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
            getNumberBetween(hashedAttr, 52, 54) // appeal
        );

        _pisiCollection[hashedAttr] = pa;

        return hashedAttr;
    }

    function encodeAttributes(
        uint24 eyeColor,
        uint8 eyeSize,
        uint24 headColor,
        uint8 headSize,
        uint8 beardSize,
        uint24 tailColor,
        uint24 tailAccentColor,
        uint8 tailSize,
        uint24 bodyColor,
        uint24 bodyAccentColor,
        uint8 stripeType,
        uint8 hungerness,
        uint8 fragility,
        uint8 fertility,
        uint8 appeal
        ) public returns (uint216){
        
    }

    function randomAttributes() public returns (string memory) {
        uint256 rand = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)));

        return decodeAttributes(uint2str(rand));

        // string memory randColor = uint2hexstr(rand % (16 ** 6));
        // string memory randInt = uint2str(rand % (2 ** 8));

        // return decodeAttributes(string(abi.encodePacked(
        //     abi.encodePacked(
        //         randColor, // eyeColor,
        //         randInt, // eyeSize,

        //         randColor, // headColor,
        //         randInt, // headSize,

        //         randInt, // beardSize,

        //         randColor, // tailColor,
        //         randColor, // tailAccentColor,
        //         randInt  // tailSize,
        //     ), 
            
        //     abi.encodePacked(
        //         randColor, // bodyColor,
        //         randColor, // bodyAccentColor,

        //         randInt, // stripeType,

        //         randInt, // hungerness,
        //         randInt, // fragility,
        //         randInt, // fertility,
        //         randInt  // appeal
        //     )
        // )));
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

    function uint2hexstr(uint i) internal pure returns (string memory) {
        if (i == 0) return "0";
        uint j = i;
        uint length;
        while (j != 0) {
            length++;
            j = j >> 4;
        }
        uint mask = 15;
        bytes memory bstr = new bytes(length);
        uint k = length - 1;
        uint numStart = 48;
        uint letterStarn = 65;
        while (i != 0){
            uint curr = (i & mask);
            bstr[k--] = curr > 9 ? byte(uint8(55 + curr)) : byte(uint8(48 + curr)); // 55 = 65 - 10
            i = i >> 4;
        }
        return string(bstr);
    }

    function getNumberBetween(string memory fN, uint8 start, uint8 end) public pure returns(string memory) {
        return substring(fN, start, end);
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
        return _pisiCollection[pisiHash].hungerness;
    }

    function getFragility(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].fragility;
    }

    function getFertility(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].fertility;
    }

    function getAppeal(string memory pisiHash) public view returns(string memory) {
        return _pisiCollection[pisiHash].appeal;
    }

    function substring(string memory str, uint startIndex, uint endIndex) pure internal returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex-startIndex);
        for(uint i = startIndex; i < endIndex; i++) {
            result[i-startIndex] = strBytes[i];
        }
        return string(result);
    }
}