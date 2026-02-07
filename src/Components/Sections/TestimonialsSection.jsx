import { Star } from 'lucide-react';
import Card from '../UI/Card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Worker',
    avatar: 'SJ',
    content: 'TaskFi has been a game-changer for me. I earn extra income during my free time by completing simple tasks. The payments are always on time!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Buyer',
    avatar: 'MC',
    content: 'As a small business owner, TaskFi helps me get quality work done quickly. The worker pool is talented and reliable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Worker',
    avatar: 'ED',
    content: 'I love the flexibility! I can work from anywhere and choose tasks that match my skills. Highly recommend to anyone looking for remote work.',
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          What Our Users Say
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Join thousands of satisfied workers and buyers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6" elevated>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-indigo-600">{testimonial.avatar}</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`}
                />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              "{testimonial.content}"
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
