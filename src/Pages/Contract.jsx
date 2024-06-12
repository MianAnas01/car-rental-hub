import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/car.png"

const Contract = ({ vehicleData }) => {
  // Destructure vehicle data for easier access
//   const { model, brand, ac, seats, licensePlate, transmission, days } =
//     vehicleData;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">CONTRACT</h1>
        <spann className="text-center mb-4 mx-auto block">
          By using our website, you agree to the contract.
        </spann>
       
        <div className="text-center space-y-2">
          <p>
            Car model: <span className="font-semibold">Sentra
                {/* {model} */}
                </span>
          </p>
          <p>
            Brand: <span className="font-semibold">Hundai
                {/* {brand} */}
                </span>
          </p>
          <p>
            AC/no AC: <span className="font-semibold">Ac
                {/* {ac} */}
                </span>
          </p>
          <p>
            No. of seats: <span className="font-semibold">4
                {/* {seats} */}
                </span>
          </p>
          <p>
            License plate: <span className="font-semibold">LHR 2311
                {/* {licensePlate} */}
                </span>
          </p>
          <p>
            Auto/Manual: <span className="font-semibold">Manual
                {/* {transmission} */}
                </span>
          </p>
          <p>
           Total Amount: <span className="font-semibold">  6000              {/* {days} */}
                </span>
          </p>
        </div>
        <p className="mt-6 text-center">
        The customer is responsible for any kind of damage to the vehicle during the rental period. All repair costs will be charged to the customer. <br />
       The vehicle must be returned on the scheduled return date. Failure to do so will result in additional charges. <br />
Late returns will incur a heavy fine. The fine amount will be calculated based on the number of days past the scheduled return date. <br />
Full payment and real ID card of customer are required at the time of rental. ID carrd will be returned after safe return of the vehicle. 
        </p>
        <p className="mt-2 text-center">
          By pressing the CONFIRM button, you agree to these terms and cannot
          deny afterwards!
        </p>
        <Link to="./Payment">

        <div className="flex justify-center px-4 py-2 mt-6 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg">
            <button className="text-white">
              CONFIRM
            </button>
            </div>

          </Link>
      </div>
    </div>
  );
};

export default Contract;
