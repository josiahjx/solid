'use client';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const testimonials = [
    {
      text: "After losing access to my hardware wallet with 12 BTC, I thought all was lost. SolidBlockForensics recovered every last satoshi. Their expertise is unmatched.",
      name: "Michael T.",
      location: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: "I sent $85,000 worth of ETH to a wrong address. SolidBlockForensics tracked it down and negotiated with the recipient to return 90% of my funds.",
      name: "Sarah L.",
      location: "New York, NY",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      text: "My father passed away with crypto assets and no instructions. SolidBlockForensics helped navigate inheritance laws and recover his digital legacy.",
      name: "David R.",
      location: "Austin, TX",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4.5
    },
    {
      text: "Lost my private keys in a house fire. SolidBlockForensics used advanced recovery techniques to restore access to my $250K portfolio.",
      name: "Jennifer K.",
      location: "Miami, FL",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5
    },
    {
      text: "Exchange froze my account with $180K. SolidBlockForensics navigated the legal process and recovered 95% of my assets.",
      name: "Robert M.",
      location: "Seattle, WA",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5
    },
    {
      text: "Sent BTC to wrong network. SolidBlockForensics tracked the transaction and successfully recovered my funds.",
      name: "Lisa P.",
      location: "Chicago, IL",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 4.5
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [-testimonials.length * 350, -testimonials.length * 350 * 2],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [controls, isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Success Stories</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Don't just take our word for it. Here's what our clients say.</p>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-6"
            animate={controls}
          >
                         {duplicatedTestimonials.map((testimonial, index) => (
               <motion.div 
                 key={index} 
                 className="bg-white p-6 rounded-xl shadow-md w-[350px] flex-shrink-0 testimonial-card"
                 whileHover={{ 
                   scale: 1.05,
                   transition: { duration: 0.2 }
                 }}
               >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                    <img src={testimonial.image} alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 