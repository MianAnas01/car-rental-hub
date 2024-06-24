import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import car2 from "../assets/car2.png";
import axios from "axios";
import { AuthContext } from "../context/auth/auth.provider";
import { base_url } from "../config/config";
import { LoadingContext } from "../context/loading/loading.provider";

// upload Vehicle
const Uploadvehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    seats: "",
    manual: "",
    rent: "",
    location: "",
    licensePlate: "",
    image: null,
  });

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("carBrand", formData.brand);
    formDataToSend.append("carModel", formData.model);
    formDataToSend.append("noOfSeats", formData.seats);
    formDataToSend.append("transmission", formData.manual);
    formDataToSend.append("rentPerDay", formData.rent);
    formDataToSend.append("address", formData.location);
    formDataToSend.append("licensePlate", formData.licensePlate);
    formDataToSend.append("images", formData.image);
    formDataToSend.append("rentalId", user?._id);
    const { data } = await axios.post(
      `${base_url}/vehicle/rental/uploadvehicle`,
      formDataToSend
    );
    console.log(data);
  };

  // get vehicle
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${base_url}/vehicle/rental/getvehicle`,
          { rentalId: user?._id }
        );

        setVehicles(response.data?.vehicles);
      } catch (error) {
        console.error("Error fetching vehicles:", error.message);
        // Handle the error, e.g., display an error message to the user
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchVehicles();
    }
  }, [user]);

  // booking requests
  const [bookingRequests, setBookingRequests] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch booking requests
  const fetchBookingRequests = async () => {
    try {
      const { data } = await axios.post(`${base_url}/booking/bookings`, {
        rentalId: user?._id,
      });
      const { declineVehicles, pendingVehicles, rentedVehicles } = data;
      setBookingRequests(pendingVehicles);
    } catch (error) {
      setError("Failed to fetch booking requests");
    }
  };

  useEffect(() => {
    fetchBookingRequests();
  }, [user]);

  const determineStatus = (rentalResponse) => {
    if (rentalResponse === "approved") {
      return "Approved";
    } else if (rentalResponse === "declined") {
      return "Declined";
    } else {
      return "Pending";
    }
  };

  const handleAccept = async (bookingId) => {
    try {
      const response = await axios.put(
        `${base_url}/booking/updateStatus/${bookingId}/accept`
      );
      if (response.status === 200) {
        const updatedBookingRequests = bookingRequests.filter((booking) =>
          booking._id !== bookingId
        );
        setBookingRequests(updatedBookingRequests);
        console.log(bookingRequests, "booking requests")
      }
    } catch (error) {
      setError("Failed to accept booking request");
    }
  };

  const handleDecline = async (bookingId) => {
    try {
      const response = await axios.put(
        `${base_url}/booking/updateStatus/${bookingId}/decline`
      );
      if (response.status === 200) {
        const updatedBookingRequests = bookingRequests.filter((booking) =>
          booking._id !== bookingId
         
        );
        setBookingRequests(updatedBookingRequests);
      }
    } catch (error) {
      setError("Failed to decline booking request");
    }
  };
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">UPLOAD VEHICLE</h2>
            <p className="mb-6">Upload information about your vehicle.</p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="brand"
                  placeholder="Car Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="model"
                  placeholder="Car Model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="seats"
                  placeholder="How many seats?"
                  value={formData.seats}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="manual"
                  placeholder="Manual/Auto"
                  value={formData.manual}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="rent"
                  placeholder="Rent per day/per week in PKR"
                  value={formData.rent}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Car location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="licensePlate"
                  placeholder="License Plate Number"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              {/* <div className="mb-4"> */}

              {/* </div> */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full p-2 bg-gray-500 text-white rounded-lg"
              >
                Upload
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="bg-red-500 rounded-full w-32 h-32 flex items-center justify-center relative cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleImageChange}
                className="hidden"
              />
              <p className="text-white mt-2">Add Image</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">YOUR VEHICLES</h2>
          <p className="mb-6">Your vehicles that you uploaded on site.</p>

          {!loading ? (
            vehicles?.length > 0 &&
            vehicles.map((item) => (
              <div
                key={item._id}
                className="flex items-center bg-red-500 text-white p-4 rounded-lg"
              >
                <img
                  src={item.avatar}
                  alt="Car"
                  className="w-32 h-auto rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.carBrand}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.carModel}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.noOfSeats}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.transmission}</h3>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.address}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.licensePlate}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.status}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{item.rentPerDay}</p>
                  <p>per day</p>
                  <span className="bg-white text-red-500 px-2 py-1 rounded-full mt-2 inline-block">
                    {item.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>

      {/* booking requests */}
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">BOOKING REQUESTS</h2>
          {/* <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg">
            
         <img
              src={item.avatar}
              alt="Car"
              className="w-32 h-auto rounded-lg mr-4"
            />{" "}
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.carBrand}</h3>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.carModel}</h3>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.noOfSeats}</h3>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.transmission}</h3>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.address}</h3>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{booking.licensePlate}</h3>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold"> {booking.price}</p>
              <p>per day</p> 

              
            </div>
          </div> */}

          {bookingRequests?.length > 0 &&
            bookingRequests.map((booking) => (
              <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg">
                <div key={booking._id}>
                  <button
                    className="bg-red-500 px-2 py-1 rounded-full mt-2 inline-block mr-2"
                    onClick={() => handleDecline(booking._id)}
                    // disabled={booking.status !== "Pending"}
                  >
                    Decline
                  </button>
                  <button
                    className="bg-green-500 px-2 py-1 rounded-full mt-2 inline-block"
                    onClick={() => handleAccept(booking._id)}
                    // disabled={booking.status !== "Pending"}
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Uploadvehicle;
