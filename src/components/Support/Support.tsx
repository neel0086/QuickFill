import React from "react";
import { Link } from "react-router-dom";
import { SelectImage } from "../CustomIcon/CustomIcon";

const Support: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-2">
        <h1 className="text-2xl font-semibold mb-4">Follow Us</h1>

        <div className="flex items-center mt-6">
          <img src={SelectImage("linkedin")} className="w-10" />
          <div className="ml-2">
            <a
              className="font-semibold"
              href="https://www.linkedin.com/in/neel-mehta-71857b1bb/"
              target="blank"
            >
              LinkedIn
            </a>
            <p className="text-sm text-gray-100">
              Follow me on LinkedIn for updates and news.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <img src={SelectImage("email")} className="w-10" />
          <div className="ml-2">
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-100">
              Contact us via email for inquiries and support.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center mt-12">
          <Link to="/upi">
            <img src="upi.png" className="w-10" />
          </Link>
          <div className="ml-2">
            <p className="font-semibold">UPI</p>
            <p className="text-sm text-gray-100">
              We let you choose the price you can afford.
            </p>
            <p className="text-sm text-gray-300">
              Click on image to pay any amount that you can afford
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Support;
