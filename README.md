# CryptoView - Live Cryptocurrency Price Tracker

## Project Overview
CryptoView is a sleek and modern front-end application for displaying real-time cryptocurrency data. Built with **React**, **TypeScript**, and **TailwindCSS**, it provides a detailed and user-friendly interface for tracking the crypto market.

The application features a dual-page layout:

- **Home Page:** Offers a quick glance at the market with a "Top 5 Coins" list and a dynamic search bar.
- **All Coins Page:** Provides a comprehensive grid view of the top 100 cryptocurrencies with detailed metrics.

Key features include live data fetching with a **60-second auto-refresh**, a fully responsive design for all devices, and a professional, data-rich UI.

---

## Features

### General Features
- **Live Data:** Fetches and displays up-to-the-minute cryptocurrency data.
- **Auto-Refresh:** Data automatically updates every 60 seconds to keep you informed.
- **Fully Responsive:** Optimized for desktops, tablets, and mobile devices.
- **Modern Tech Stack:** Built with the latest front-end technologies for a robust and maintainable codebase.

### UI & UX Features

| Feature         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| Professional UI | Displays detailed metrics: Price, Market Cap, 24h Volume, 24h High/Low, and 24h Price Change %. |
| Home Page       | Features a Google-style search bar and a "Top 5 Coins" list for a quick glance. |
| All Coins Page  | A comprehensive grid view of the top 100 cryptocurrencies.                 |
| Dynamic Search  | Instantly filters coins by name or symbol on the home page.                 |

---

## Tech Stack
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Public Cryptocurrency API:** The data source for all cryptocurrency information.

---

## Project Structure
The project is contained within a single file (`crypto-tracker.tsx`) for simplicity and ease of use in specific environments.

- **Type Definitions:** TypeScript interfaces define the shape of the Coin data object.
- **Helper Components:** Reusable components like `LoadingSpinner`, `ErrorDisplay`, and `DataStat` handle different UI states.
- **UI Components:** `CryptoCard`, `TopCoinItem`, and `Navbar` are responsible for the main UI elements.
- **Page Components:** `HomePage` and `AllCoinsPage` manage the layout for the two distinct views.
- **Main App Component:** The `App` component orchestrates state management, API calls, and renders the appropriate page.
