'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 slide-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recover Your Lost Crypto Assets</h1>
          <p className="text-xl mb-8 text-blue-100">SolidBlockForensics specializes in recovering lost, stolen, or inaccessible cryptocurrency. Our team of blockchain experts has helped recover over $5M in digital assets.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
           <Link href="/contact" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition pulse-animation">
              Start Recovery Process
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center slide-in">
          <img 
            src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
            alt="Crypto Security" 
            className="rounded-xl shadow-2xl max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
} 