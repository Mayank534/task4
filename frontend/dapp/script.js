import { ethers } from "./ethers.js";

// Function to connect to MetaMask and handle the connection
async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        // Request MetaMask authorization
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Check if MetaMask is connected
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          console.log("Successfully connected to MetaMask!");
          window.alert("Successfully connected to MetaMask Wallet.");
          window.location.href = "next_page.html"; // Replace 'next_page.html' with your desired page
        } else {
          console.error("MetaMask is not connected.");
        }
      } catch (error) {
        console.error("User denied account access or MetaMask is not installed.");
      }
    } else {
      console.error("Please install MetaMask to use this feature.");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectButton");
    connectButton.addEventListener("click", connectToMetaMask);
  });
  