import React, { useState, useEffect, useMemo } from "react";
import AllCoinsPage from "../../../Pages/AllCoinPage";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  high_24h: number;
  low_24h: number;
}

const API_URL = import.meta.env.VITE_API_URL;

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center space-x-2 mt-10">
    <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
    <span className="text-gray-400 text-lg">Loading Crypto Data...</span>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div
    className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-10"
    role="alert"
  >
    <strong className="font-bold">Oops! </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

const formatLargeNumber = (num: number | null | undefined): string => {
  if (num === null || num === undefined) return "N/A";
  if (num >= 1_000_000_000_000)
    return `$${(num / 1_000_000_000_000).toFixed(2)}T`;
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
};

const formatCurrency = (num: number | null | undefined) => {
  if (num === null || num === undefined) return "N/A";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(num);
};

const DataStat: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-400">{label}</span>
    <span className="font-medium text-white">{value}</span>
  </div>
);

export const CryptoCard: React.FC<{ coin: Coin }> = ({ coin }) => {
  const priceChange = coin.price_change_percentage_24h;
  const priceChangeColor = priceChange >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col justify-between border border-gray-700 transform hover:scale-105 hover:border-cyan-500 transition-all duration-300 ease-in-out">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={coin.image}
              alt={`${coin.name} logo`}
              className="w-10 h-10"
            />
            <div>
              <h2 className="text-lg font-bold text-white truncate">
                {coin.name}
              </h2>
              <p className="text-gray-400 uppercase text-xs">{coin.symbol}</p>
            </div>
          </div>
          <div className={`text-sm font-semibold ${priceChangeColor}`}>
            {priceChange.toFixed(2)}%
          </div>
        </div>

        <div className="my-5 text-left">
          <p className="text-2xl font-semibold text-white">
            {formatCurrency(coin.current_price)}
          </p>
        </div>
      </div>

      <div className="space-y-2.5 border-t border-gray-700 pt-4">
        <DataStat
          label="Market Cap"
          value={formatLargeNumber(coin.market_cap)}
        />
        <DataStat
          label="24h Volume"
          value={formatLargeNumber(coin.total_volume)}
        />
        <DataStat label="24h High" value={formatCurrency(coin.high_24h)} />
        <DataStat label="24h Low" value={formatCurrency(coin.low_24h)} />
      </div>
    </div>
  );
};

const TopCoinItem: React.FC<{ coin: Coin }> = ({ coin }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(coin.current_price);
  return (
    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-center space-x-3">
        <img src={coin.image} alt={coin.name} className="w-8 h-8" />
        <div>
          <p className="font-semibold text-white">{coin.name}</p>
          <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
        </div>
      </div>
      <p className="font-mono text-cyan-400">{formattedPrice}</p>
    </div>
  );
};

export type Page = "home" | "allCoins";

const HomePage: React.FC<{
  coins: Coin[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}> = ({ coins, searchTerm, setSearchTerm }) => {
  const filteredCoins = useMemo(
    () =>
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [coins, searchTerm]
  );

  const top5Coins = coins.slice(0, 5);

  return (
    <div>
      <div className="relative mb-8 max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for a coin by name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-800 border-2 border-gray-700 rounded-full px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
      </div>

      {searchTerm ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCoins.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-4 text-center">
            Top 5 Market Cap Coins
          </p>
          <div className="space-y-3">
            {top5Coins.map((coin) => (
              <TopCoinItem key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {searchTerm && filteredCoins.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          <p className="text-xl">No coins found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page] = useState<Page>("home");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      if (coins.length === 0) setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL as string);
        if (!response.ok)
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        const data: Coin[] = await response.json();
        setCoins(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred.");
        console.error("Error fetching crypto data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptoData();
    const intervalId = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white p-4 sm:p-6 lg:p-20">
      <div className="container mx-auto">
        <main>
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : (
            <>
              {page === "home" && (
                <HomePage
                  coins={coins}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              )}
              {page === "allCoins" && <AllCoinsPage coins={coins} />}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
