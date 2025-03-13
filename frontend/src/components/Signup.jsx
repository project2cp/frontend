import React, { useState, useEffect } from "react";
import validator from "validator";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic (same as previous)
  const validatePassword = (password) => password.length >= 8;

  useEffect(() => {
    setIsFormValid(
      firstNameError === "" &&
        lastNameError === "" &&
        emailError === "" &&
        passwordError === "" &&
        phoneNumberError === "" &&
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        password !== "" &&
        phoneNumber !== ""
    );
  }, [
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    phoneNumberError,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  ]);

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setFirstNameError(newFirstName ? "" : "First name is required");
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    setLastNameError(newLastName ? "" : "Last name is required");
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(
      validator.isEmail(newEmail) || newEmail === "" ? "" : "Invalid email"
    );
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(
      validatePassword(newPassword) || newPassword === ""
        ? ""
        : "Password must be 8+ characters"
    );
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    setPhoneNumberError(newPhoneNumber ? "" : "Phone number is required");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle sign up logic
      console.log("Signed up:", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden login">
      {/* Glass Effect Card */}
      <div className="relative z-10 w-full h-fit max-w-md bg-[rgba(93,51,139,0.2)] rounded-2xl backdrop-blur-lg border border-[rgba(255,255,255,0.1)] shadow-2xl p-6 mx-4 my-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-300">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* First Name and Last Name */}
          <div className="flex space-x-3">
            <div className="w-1/2">
              <label className="block text-gray-300 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                className={`w-full p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                  firstNameError
                    ? "border-red-400"
                    : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
                } text-white placeholder-gray-400 focus:outline-none `}
              />
              {firstNameError && (
                <p className="text-red-400 text-sm mt-1">{firstNameError}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-300 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                className={`w-full p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                  lastNameError
                    ? "border-red-400"
                    : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
                } text-white placeholder-gray-400 focus:outline-none `}
              />
              {lastNameError && (
                <p className="text-red-400 text-sm mt-1">{lastNameError}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                emailError
                  ? "border-red-400"
                  : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
              } text-white placeholder-gray-400 focus:outline-none `}
            />
            {emailError && (
              <p className="text-red-400 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className={`w-full p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                passwordError
                  ? "border-red-400"
                  : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
              } text-white placeholder-gray-400 focus:outline-none `}
            />
            {passwordError && (
              <p className="text-red-400 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>

          {/* Social Login Section */}
          <div className="relative my-4 flex items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <div className="mx-4 text-gray-300 text-sm">Or continue with</div>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <FaGoogle className="text-2xl text-white" />
            </button>
            <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <FaFacebookF className="text-2xl text-white" />
            </button>
            <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <FaApple className="text-2xl text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
