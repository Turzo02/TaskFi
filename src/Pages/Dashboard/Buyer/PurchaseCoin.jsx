import { useState } from 'react';
import { Coins, CheckCircle, CreditCard, Wallet, Sparkles } from 'lucide-react';
import { useAuth } from '../../../Context/AuthContext';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';

const PurchaseCoin = () => {
  const { user } = useAuth();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const coinPackages = [
    { id: 1, coins: 100, price: 10, popular: false },
    { id: 2, coins: 500, price: 45, popular: true },
    { id: 3, coins: 1000, price: 80, popular: false },
    { id: 4, coins: 5000, price: 350, popular: false },
  ];

  const handlePurchase = () => {
    if (selectedPackage) {
      alert(`Demo: Purchased ${selectedPackage.coins} coins for $${selectedPackage.price}!`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Purchase Coins</h1>
        <p className="text-slate-600 dark:text-slate-400">Buy coins to post tasks and hire workers</p>
      </div>

      <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-indigo-100 mb-1">Current Balance</p>
            <p className="text-4xl font-bold">{user?.coin || 0} coins</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Coins className="w-8 h-8" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coinPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`p-5 cursor-pointer transition-all ${
              selectedPackage?.id === pkg.id
                ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedPackage(pkg)}
            elevated={pkg.popular}
          >
            {pkg.popular && (
              <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Popular</span>
              </div>
            )}
            <div className="text-center">
              <Coins className="w-10 h-10 mx-auto mb-3 text-indigo-600" />
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.coins}</p>
              <p className="text-slate-500 text-sm">coins</p>
              <p className="text-2xl font-semibold text-green-600 mt-2">${pkg.price}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedPackage && (
        <Card className="p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Payment Method</h3>
          <div className="flex gap-3 mb-4">
            <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" /> Credit Card
            </Button>
            <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
              <Wallet className="w-5 h-5" /> PayPal
            </Button>
          </div>
          <Button variant="primary" className="w-full" onClick={handlePurchase}>
            Pay ${selectedPackage.price} for {selectedPackage.coins} Coins
          </Button>
        </Card>
      )}
    </div>
  );
};

export default PurchaseCoin;
