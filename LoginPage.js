import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  // const handleSendOtp = () => {
  //   if (mobileNumber) {
  //     // Logic to send OTP can be added here
  //     setOtpSent(true);
  //     alert('OTP has been sent to your mobile number.');
  //   }
  // };

  const handleSendOtp = async () => {
    if (mobileNumber) {
      try {
        const response = await fetch('http://localhost:3001/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobileNumber }),
        });
        const data = await response.json();
        if (response.ok) {
          setOtpSent(true);
          alert(data.message);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert('Error sending OTP');
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (otp) {
      try {
        const response = await fetch('http://localhost:3001/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobileNumber, otp }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          navigate('/dashboard');
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert('Error verifying OTP');
      }
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-blue-400 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login with Mobile</h2>
          <form className="mt-8 space-y-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your mobile number"
                required
              />
              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <div className="mt-4">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
                      OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="w-full py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
                  >
                    Verify OTP
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
