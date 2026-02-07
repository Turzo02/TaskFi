import { CreditCard, CheckCircle, Clock, Download } from 'lucide-react';
import Card from '../../../Components/UI/Card';
import Button from '../../../Components/UI/Button';
import Badge from '../../../Components/UI/Badge';

const PaymentHistory = () => {
  const payments = [
    { id: 1, type: 'Coin Purchase', amount: 45, coins: 500, status: 'completed', date: '2026-02-05', method: 'Credit Card' },
    { id: 2, type: 'Coin Purchase', amount: 10, coins: 100, status: 'completed', date: '2026-01-28', method: 'PayPal' },
    { id: 3, type: 'Task Payment', amount: 35, coins: 350, status: 'completed', date: '2026-01-20', method: 'Wallet' },
    { id: 4, type: 'Coin Purchase', amount: 80, coins: 1000, status: 'pending', date: '2026-02-06', method: 'Credit Card' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Payment History</h1>
        <p className="text-slate-600 dark:text-slate-400">View your transaction history</p>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Coins</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Method</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 px-4 font-medium text-slate-900 dark:text-white">{payment.type}</td>
                  <td className="py-4 px-4 text-slate-600">${payment.amount.toFixed(2)}</td>
                  <td className="py-4 px-4 text-indigo-600 font-medium">{payment.coins}</td>
                  <td className="py-4 px-4 text-slate-600">{payment.method}</td>
                  <td className="py-4 px-4 text-slate-600">{payment.date}</td>
                  <td className="py-4 px-4">
                    <Badge variant={payment.status === 'completed' ? 'success' : 'warning'} size="sm">
                      {payment.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PaymentHistory;
