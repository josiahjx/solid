export default function Services() {
  const services = [
    {
      icon: "fas fa-key",
      title: "Lost Private Keys",
      description: "Recover access to wallets when private keys are lost, damaged, or forgotten through advanced cryptographic techniques."
    },
    {
      icon: "fas fa-user-lock",
      title: "Hacked Accounts",
      description: "Trace and recover funds stolen through phishing attacks, exchange hacks, or malware infections."
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Wrong Transactions",
      description: "Attempt recovery of funds sent to wrong addresses or incorrect networks through blockchain analysis."
    },
    {
      icon: "fas fa-hard-hat",
      title: "Hardware Wallet Issues",
      description: "Recover assets from damaged, lost, or malfunctioning hardware wallets using specialized techniques."
    },
    {
      icon: "fas fa-database",
      title: "Exchange Recovery",
      description: "Assist with recovering funds from defunct or frozen exchange accounts through legal channels."
    },
    {
      icon: "fas fa-question-circle",
      title: "Other Scenarios",
      description: "We handle complex recovery cases including inheritance, smart contract issues, and more."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">Our Recovery Services</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">We specialize in various types of cryptocurrency recovery scenarios.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl text-blue-800 font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 