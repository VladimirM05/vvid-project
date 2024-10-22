import { CoutCashBtn } from './../src/components/CoutCashBtn/CoutCashBtn';
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("https://rpc-amoy.polygon.technology/");

const contractAddress = "0xd188fc743Fb42Fb9Dcd4a32dF5C9dbB335e97f6D"; 
const abi = [
"function withdrawTokens(uint256 amount, address recipient)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

const walletPrivateKey = ""; 
const wallet = new ethers.Wallet(walletPrivateKey, provider);

async function withdrawTokens(amount, recipient) {
const decimals = 3; 
const amountInTokens = ethers.utils.parseUnits(amount.toString(), decimals);

const tx = await contract.connect(wallet).withdrawTokens(amountInTokens, recipient);
console.log("Transaction sent:", tx.hash);

await tx.wait();
console.log("Transaction confirmed:", tx.hash);
}

const amountToWithdraw = {amount};
const recipientAddress = "0x27a82aB8362280ae1d79909F47B53839289E3998";
withdrawTokens(amountToWithdraw, recipientAddress)
.then(() => console.log("Withdrawal successful"))
.catch(err => console.error("Error withdrawing tokens:", err));