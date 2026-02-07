import { DollarSign, CreditCard, History, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { useAuth } from '../../../Context/AuthContext';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Input from '../../../Components/UI/Input';
import Badge from '../../../Components/UI/Badge';

const Withdrawals = () => {
  const { user } = useAuth();

  const withdrawalHistory = [
    { id: 1, amount: 50.00, method: 'PayPal', status: 'completed', date: '2026-02-01' },
    { id: 2, amount: 25.00, method: 'Bank Transfer', status: 'pending', date: '2026-02-05' },
    { id: 3, amount: 75.00, method: 'PayPal', status: 'completed', date: '2026-01-28' },
    { id: 4, amount: 30.00, method: 'Crypto', status: 'completed', date: '2026-01-20' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Withdrawals</h1>
        <p className="text-slate-600 dark:text-slate-400">Manage your earnings and withdraw funds</p>
      </div>

      {/* Balance Card */}
      <Card className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white" elevated>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 mb-1">Available Balance</p>
            <p className="text-4xl font-bold">${user?.coin?.toFixed(2) || '0.00'}</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <DollarSign className="w-8 h-8" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Withdrawal Form */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Request Withdrawal
          </h3>
          <div className="space-y-4">
            <Input label="Amount ($)" type="number" placeholder="Enter amount to withdraw" />
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Withdrawal Method
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800">
                <option>PayPal</option>
                <option>Bank Transfer</option>
                <option>Crypto (USDT)</option>
              </select>
            </div>
            <Input label="Account Email/Address" placeholder="Enter your payment details" />
            <Button variant="primary" className="w-full">
              Request Withdrawal <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Withdrawal History */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <History className="w-5 h-5" />
            Withdrawal History
          </h3>
          <div className="space-y-3">
            {withdrawalHistory.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  {tx.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Clock className="w-5 h-5 text-amber-500" />
                  )}
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">${tx.amount.toFixed(2)}</p>
                    <p className="text-sm text-slate-500">{tx.method} • {tx.date}</p>
                  </div>
                </div>
                <Badge variant={tx.status === 'completed' ? 'success' : 'warning'} size="sm">
                  {tx.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Withdrawals;
