import { Link } from 'react-router';
import { HelpCircle } from 'lucide-react';
import Button from '../UI/Button';
import Card from '../UI/Card';

const faqs = [
  {
    question: 'How do I get started as a worker?',
    answer: 'Simply create an account, browse available tasks, and apply for ones that match your skills. Once approved, complete the task and submit your work for review.'
  },
  {
    question: 'How do payments work?',
    answer: 'Workers earn coins for completed tasks. These coins can be withdrawn to PayPal, bank account, or cryptocurrency. Buyers purchase coins to post tasks.'
  },
  {
    question: 'What types of tasks are available?',
    answer: 'Tasks include website testing, data entry, surveys, translation, image tagging, content moderation, and more. New task types are added regularly!'
  },
  {
    question: 'Is there a minimum withdrawal amount?',
    answer: 'Yes, the minimum withdrawal is $10 worth of coins. Withdrawals are processed within 24-48 hours.'
  }
];

const FAQSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Got questions? We've got answers
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              {faq.question}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {faq.answer}
            </p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Still have questions?
        </p>
        <Link to="/login">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
