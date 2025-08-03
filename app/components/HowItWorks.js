export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Share details of your situation through our secure portal. Our experts will assess recovery feasibility."
    },
    {
      number: 2,
      title: "Recovery Plan",
      description: "We create a customized recovery strategy with transparent pricing and success probability."
    },
    {
      number: 3,
      title: "Execution",
      description: "Our team works diligently using advanced blockchain forensics and cryptographic methods."
    },
    {
      number: 4,
      title: "Asset Return",
      description: "Recovered assets are securely transferred to your designated wallet with full transparency."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Process</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Our proven 4-step process maximizes your chances of successful recovery.</p>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                     <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="120" 
               height="120" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="#1E3F8E" 
               strokeWidth="2" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               className="mb-4"
             >
               <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/>
               <rect x="14" y="2" width="8" height="8" rx="1"/>
             </svg>
             <h3 className="text-2xl font-bold hidden md:block text-[#1E3F8E] text-center">SolidBlockForensics</h3>
           </div>
          <div className="md:w-1/2 md:pl-12">
            {steps.map((step, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-400/40 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800 font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-blue-800 text-center">Our No-Recovery, No-Fee Guarantee</h3>
          <p className="text-gray-700 text-center">We only charge a fee if we successfully recover your assets. Initial consultations are always fixed price.</p>
        </div>
      </div>
    </section>
  );
} 