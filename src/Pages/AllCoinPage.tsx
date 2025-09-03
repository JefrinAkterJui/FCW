import { CryptoCard, type Coin } from "../components/Home/Hero/Hero";


const AllCoinsPage: React.FC<{ coins: Coin[] }> = ({ coins }) => (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coins.map(coin => <CryptoCard key={coin.id} coin={coin} />)}
    </div>
);

export default AllCoinsPage;