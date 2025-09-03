import type { Page } from "../Home/Hero/Hero";

const Navbar: React.FC<{ activePage: Page; setPage: (page: Page) => void }> = () => (
    <nav className="bg-gray-800 backdrop-blur-sm p-4 flex items-center justify-center shadow-md">
        <div className="flex items-center space-x-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="text-2xl font-bold text-white">CryptoView</span>
        </div>
        <div className="flex space-x-4">
            {/* <button onClick={() => setPage('home')} className={`px-4 py-2 rounded-md font-semibold transition-colors ${activePage === 'home' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Home</button>
            <button onClick={() => setPage('allCoins')} className={`px-4 py-2 rounded-md font-semibold transition-colors ${activePage === 'allCoins' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>All Coins</button> */}
        </div>
    </nav>
);

export default Navbar