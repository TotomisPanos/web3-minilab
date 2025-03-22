# web3-minilab 🧰

A modern Ethereum utility toolkit built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ethers.js**.  
Easily connect your wallet, check balances, resolve ENS names, estimate gas, simulate token swaps, and more — all in one responsive interface.

---

## 🔧 Features

- 🔗 **Wallet Dashboard** – Connect your wallet, view ETH balance, transactions, and network info.
- 💰 **Balance Checker** – Check ERC-20 token balances for any Ethereum address.
- 🧠 **ENS Resolver** – Convert ENS names to addresses and vice versa, including avatar support.
- ⛽ **Gas Estimator** – View current gas prices and estimate transaction costs.
- 🔄 **Token Swap** – Simulate or execute token swaps (Uniswap integration ready).

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ethers.js](https://docs.ethers.io/)
- [lucide-react](https://lucide.dev/) for icons

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/web3-minilab.git
cd web3-minilab
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
app/
├── page.tsx            # Home page with toolkit overview
├── layout.tsx          # Global layout with responsive navbar
├── wallet-dashboard/
├── balance-checker/
├── ens-resolver/
├── gas-estimator/
├── swap/
```

Each route contains a self-contained Ethereum utility.

---

## 🛡️ Disclaimer

This project is for educational and testing purposes. Always test on a testnet before interacting with live funds.

---

## 📄 License

MIT © [Your Name]

