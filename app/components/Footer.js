import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>
              <span className="font-bold text-xl">SolidBlockForensics</span>
            </div>
            <p className="text-gray-400">The leading cryptocurrency recovery service trusted by thousands worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Lost Key Recovery</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">Hacked Account Recovery</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">Transaction Recovery</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Inheritance Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-gray-400"></i>
                <span className="text-gray-400">help@SolidBlockForensics.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-gray-400"></i>
                <span className="text-gray-400">(888) 555-TOKEN</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
           
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 SolidBlockForensics. All rights reserved. | <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link> | <Link href="/privacy" className="hover:text-white transition">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
} 