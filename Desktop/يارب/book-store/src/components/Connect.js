import './Connect.css';
import book0 from '../assets/images/book0.jpg'
function Connect() {
    return (
      <div className="footer bg-gray-100 p-10 text-sm text-gray-700">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
  
          {/* Logo and Contact Info */}
          <div className="footer-contact space-y-2">
            <img
              src={book0} // استبدل المسار حسب صورتك
              alt="Cherry Blossom Books Logo"
              className="w-32 mb-2"
            />
            <p>Group 16, Building 00, Apartment 13,</p>
            <p>First Floor - El Rehab City 11841, New Cairo, Egypt</p>
            <p>📞 02 100 0 000 0</p>
            <p>✉️ info@ok11111111111.com</p>
            <p>🌐 www.books.com</p>
          </div>
  
          {/* Useful Links */}
          <div className="footer-links">
            <h3 className="font-semibold mb-2">USEFUL LINKS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Delivery & Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Loyalty Points</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
  
          {/* Shop by Category */}
          <div className="footer-categories">
            <h3 className="font-semibold mb-2">SHOP BY CATEGORY</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Arabic Books</a></li>
              <li><a href="#" className="hover:underline">English Books</a></li>
              <li><a href="#" className="hover:underline">Bookish Items</a></li>
            </ul>
          </div>
  
          {/* Contact Button and Social Icons */}
          <div className="footer-social space-y-4">
            <button className="bg-pink-300 hover:bg-pink-400 text-white px-4 py-2 rounded">
              CONTACT US
            </button>
            <div className="flex space-x-3">
              <a href="#"><i className="fab fa-facebook-square text-2xl text-black bg-pink-300 p-1 rounded"></i></a>
              <a href="#"><i className="fab fa-twitter text-2xl text-black bg-pink-300 p-1 rounded"></i></a>
              <a href="#"><i className="fab fa-instagram text-2xl text-black bg-pink-300 p-1 rounded"></i></a>
              <a href="#"><i className="fab fa-linkedin text-2xl text-black bg-pink-300 p-1 rounded"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Connect;