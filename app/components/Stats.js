import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="text-5xl font-bold text-blue-600 mb-2">5M+</div>
            <div className="text-gray-600">Recovered Assets</div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="text-5xl font-bold text-blue-600 mb-2"><CountUp to={141} /></div>
            <div className="text-gray-600">Successful Recoveries</div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
} 