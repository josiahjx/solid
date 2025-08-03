export default function About() {
  const skills = ["Blockchain Forensics", "Cryptography", "Legal Expertise"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About SolidBlockForensics</h2>
            <p className="text-gray-600 mb-6">Founded in 2018 by blockchain security experts, SolidBlockForensics has become the leading cryptocurrency recovery service with a team of 25+ specialists including cryptographers, forensic analysts, and legal experts.</p>
            <p className="text-gray-600 mb-6">We combine cutting-edge technology with deep blockchain knowledge to solve the most challenging recovery cases while maintaining the highest standards of security and confidentiality.</p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Our Team" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 