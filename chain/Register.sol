// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract AddressRegistry {
    struct AddressInfo {
        string nonevmaddrs;
        string chainname;
        string evmaddrs;
    }

    mapping(address => AddressInfo) private addressInfoMapping;

    
    function setAddressInfo(address _addr, string memory _nonevmaddrs, string memory _chainname, string memory _evmaddrs) public {
        addressInfoMapping[_addr] = AddressInfo(_nonevmaddrs, _chainname, _evmaddrs);
    }

    
    function getAddressInfo(address _addr) public view returns (string memory, string memory, string memory) {
        AddressInfo memory info = addressInfoMapping[_addr];
        return (info.nonevmaddrs, info.chainname, info.evmaddrs);
    }
}