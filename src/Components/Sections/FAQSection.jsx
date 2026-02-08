import { Link } from 'react-router';
import { HelpCircle, MessageCircle, ChevronRight, Zap } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started as a worker?',
    answer: 'Simply create an account, browse available tasks, and apply for ones that match your skills. Once approved, complete the task and submit your work for review.',
    icon: Zap
  },
  {
    question: 'How do payments work?',
    answer: 'Workers earn coins for completed tasks. These coins can be withdrawn to PayPal, bank account, or cryptocurrency. Buyers purchase coins to post tasks.',
    icon: HelpCircle
  },
  {
    question: 'What types of tasks are available?',
    answer: 'Tasks include website testing, data entry, surveys, translation, image tagging, content moderation, and more. New task types are added regularly!',
    icon: MessageCircle
  },
  {
    question: 'Is there a minimum withdrawal amount?',
    answer: 'Yes, the minimum withdrawal is $10 worth of coins. Withdrawals are processed within 24-48 hours via our secure payment gateways.',
    icon: HelpCircle
  }
];

const FAQSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-2 lg:px-0 overflow-hidden">


      <div className="container mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-bold text-xs uppercase tracking-wider mb-4 border border-brand/20">
            Support Center
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">Questions</span>
          </h2>
          <p className="text-lg text-text-muted font-medium">
            Everything you need to know about the platform, billing, and task management.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="clay-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Icon Container */}
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-text-inv transition-colors duration-300 shadow-sm">
                  <faq.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text-main group-hover:text-brand transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-bg-surface border border-border-base shadow-sm max-w-2xl w-full">
            <h4 className="text-xl font-bold text-text-main mb-2">Still have questions?</h4>
            <p className="text-text-muted mb-6">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            
            <Link to="/login">
              <button className="clay-btn flex items-center gap-2 group">
                <MessageCircle className="w-5 h-5" />
                Contact Support
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
