import { ethers } from "ethers";

const contractABI = [
  {
    inputs: [
      { internalType: "address", name: "_addr", type: "address" },
      { internalType: "string", name: "_nonevmaddrs", type: "string" },
      { internalType: "string", name: "_chainname", type: "string" },
      { internalType: "string", name: "_evmaddrs", type: "string" },
    ],
    name: "setAddressInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "getAddressInfo",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0x7cE1538D5ab60BBFaD8f3A6CA96855711520D8A7";

// no need here
async function connect() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return { contract, signer };
}

// Function to set AddressInfo
export async function setAddressInfo(addr, nonevmaddrs, chainname, evmaddrs) {
  const { contract } = await connect();
  const tx = await contract.setAddressInfo(
    addr,
    nonevmaddrs,
    chainname,
    evmaddrs
  );
  await tx.wait();
  console.log("AddressInfo set successfully");
}

export async function getAddressInfo(addr) {
  const { contract } = await connect();
  const info = await contract.getAddressInfo(addr);
  console.log("AddressInfo:", info);
  return info;
}

// (async () => {
//   const address = "just connected acc ins";
//   await setAddressInfo(
//     address,
//     "nonevmaddrs_example",
//     "chainname_example",
//     "evmaddrs_example"
//   );
//   const info = await getAddressInfo(address);
//   console.log("Retrieved AddressInfo:", info);
// })();
