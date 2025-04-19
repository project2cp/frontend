import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("verifyEmail");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');

    if (otpCode.length !== 4) {
      setOtpError("Please enter a 4-digit OTP");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:8000/api/verify-otp", {
        email,
        otp: otpCode
      });

      if (response.status === 200) {
        sessionStorage.removeItem("verifyEmail");
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      setOtpError(error.response?.data?.message || "Invalid OTP code");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setResendDisabled(true);
    try {
      await axios.post("http://localhost:8000/api/resend-otp", { email });
      setTimeout(() => setResendDisabled(false), 30000); // Enable resend after 30 seconds
    } catch (error) {
      setOtpError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden login">
      <div className="relative z-10 w-full h-fit max-w-md bg-[rgba(93,51,139,0.2)] rounded-2xl backdrop-blur-lg border border-[rgba(255,255,255,0.1)] shadow-2xl p-6 mx-4 my-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Verify Your Email</h1>
          <p className="text-gray-300">Enter the OTP sent to {email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className={`w-12 h-12 text-center text-xl rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                  otpError ? "border-red-400" : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
                } text-white focus:outline-none`}
                style={{"WebkitBoxShadow": "0 0 0 1000px rgba(255, 255, 255, 0.1) inset"}}
              />
            ))}
          </div>

          {otpError && <p className="text-red-400 text-sm text-center">{otpError}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isSubmitting 
                ? "bg-purple-700 cursor-not-allowed" 
                : "bg-purple-600 hover:bg-purple-700"
            } text-white`}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Didn't receive OTP?{" "}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendDisabled}
              className={`text-purple-300 ${
                resendDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-purple-200"
              }`}
            >
              Resend OTP {resendDisabled && "(30s)"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};