import React from 'react'
import Header from '../components/Header'; 
import Showroom from './Showroom'; 
import Rentedvehicle from './Rentedvehicle'; 
import Profile from './Profile'; 
import Footer from '../components/Footer';
import jazzcash from "../assets/jazzcash.png";
import easypaisa from "../assets/easypaisa.png"
import car from "../assets/car.png";


const Payment = () => {
 



  //  const [formData, setFormData] = useState({
  //     cardNumber: '',
  //     expiry: '',
  //     cvv: '',
  //     postal: '',
  //   });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      // Handle the form submission logic here
      console.log('Payment data:', formData);
    };
  
    return (

    

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">PAYMENT</h2>
            <p className="mb-6">Enter your details to book vehicle.</p>
            <form>
              <div className="mb-4">
                <input type="text" name="cardNumber" placeholder="Card Number" 
                // value={formData.cardNumber} onChange={handleChange} 
                className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="expiry" placeholder="MM/YY" 
                // value={formData.expiry} onChange={handleChange} 
                className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="cvv" placeholder="CVV" 
                // value={formData.cvv} onChange={handleChange} 
                className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="postal" placeholder="Postal" 
                // value={formData.postal} onChange={handleChange} 
                className="w-full p-2 border rounded-lg" />
              </div>
              <button type="button" className="w-full p-2 bg-gray-500 text-black rounded-lg mb-4">Pay with Card</button>
              
              <button type="button" onClick={handleSubmit} className="w-full p-2 bg-gray-500 text- rounded-lg">Submit</button>
            </form>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-red-500 rounded-full w-48 h-48 flex items-center justify-center">
              <img src={car} alt="Car" className="w-48  h-auto rounded-full" />
            </div>
          </div>
        </div>

        
      </div>
  

);
  };
  
export default Payment