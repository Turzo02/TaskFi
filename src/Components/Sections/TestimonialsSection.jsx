import { Star, Quote, User, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Top Rated Worker',
    initials: 'SJ',
    content: "TaskFi changed my life. I went from struggling to find gigs to earning a steady $500/week on my own schedule. The instant payouts are a lifesaver.",
    rating: 5,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Verified Buyer',
    initials: 'MC',
    content: "I needed 1,000 data points categorized overnight. The workforce here is incredibly fast and accurate. Best ROI I've found on any micro-task platform.",
    rating: 5,
    color: 'bg-emerald-500'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Digital Nomad',
    initials: 'ED',
    content: "The flexibility is unmatched. I fund my travels purely through TaskFi. The interface is beautiful and so easy to use compared to the clunky competitors.",
    rating: 5,
    color: 'bg-purple-500'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden">
      
      {/* 🟢 Background Texture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-brand/10 text-brand">
            <Quote className="w-8 h-8 fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main mb-6 tracking-tight">
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-sec">
              Global Workforce
            </span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto">
            Don't just take our word for it. Join 50,000+ users changing the way the world works.
          </p>
        </div>

        {/* 💬 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`clay-card p-8 relative group hover:-translate-y-2 transition-all duration-500 ${index === 1 ? 'md:-mt-12' : ''}`} // Stagger effect
            >
              {/* Giant Watermark Quote */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-brand/5 rotate-12 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-sec text-lg leading-relaxed font-medium mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-border-base">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-md ring-4 ring-white dark:ring-bg-surface`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-text-main flex items-center gap-1.5">
                    {testimonial.name}
                    <BadgeCheck className="w-4 h-4 text-brand fill-brand/20" />
                  </h4>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default TestimonialsSection;
