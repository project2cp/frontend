import React, { useState, useEffect } from "react";
import validator from "validator";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [loginError, setLoginError] = useState("");

    // Handle verification redirect parameters
    useEffect(() => {
        const verificationError = searchParams.get('verification_error');
        const verificationSuccess = searchParams.get('verification');
        
        if (verificationError) {
            setLoginError(
                verificationError === 'invalid_token' 
                    ? 'Invalid verification link' 
                    : 'Email already verified'
            );
        }
        
        if (verificationSuccess === 'success') {
            setLoginError('Email verified successfully! Please login');
        }
    }, [searchParams]);

    useEffect(() => {
        setIsFormValid(
            validator.isEmail(email) &&
            password.length >= 8
        );
    }, [email, password]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("");
        setLoginError("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
        setLoginError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        try {
            const response = await axios.post('/api/login', {
                email,
                password
            });

            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                navigate('/profile');
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                
                if (status === 401) {
                    setPasswordError(data.message || "Invalid password");
                } else if (status === 403) {
                    setLoginError("Please verify your email first");
                } else if (status === 404) {
                    setEmailError(data.message || "Email not found");
                } else {
                    setLoginError("Login failed. Please try again.");
                }
            } else {
                setLoginError("Network error. Please check your connection.");
            }
        }
    };

    return (
        <div className="h-screen flex items-center justify-center overflow-hidden login">
            <div className="relative z-10 w-full h-fit max-w-md bg-[rgba(93,51,139,0.2)] rounded-2xl backdrop-blur-lg border border-[rgba(255,255,255,0.1)] shadow-2xl p-6 mx-4 my-10">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300">Sign in to continue</p>
                    {loginError && (
                        <div className={`mt-2 text-sm ${
                            loginError.includes('success') ? 'text-green-400' : 'text-red-400'
                        }`}>
                            {loginError}
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-300 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className={`w-full p-3 rounded-lg bg-[rgba(255,255,255,0.1)] border ${
                                emailError ? "border-red-400" : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
                            } text-white placeholder-gray-400 focus:outline-none`}
                        />
                        {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
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
                                passwordError ? "border-red-400" : "border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-purple-300"
                            } text-white placeholder-gray-400 focus:outline-none`}
                        />
                        {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center">
                        <label className="flex items-center text-gray-300 space-x-2">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 accent-purple-500"
                            />
                            <span className="text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-purple-300 text-sm hover:text-purple-200">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                            isFormValid 
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                    >
                        Sign In
                    </button>

                    {/* Social Login */}
                    <div className="relative my-4 flex items-center">
                        <div className="flex-grow border-t border-gray-500"></div>
                        <div className="mx-4 text-gray-300 text-sm">Or continue with</div>
                        <div className="flex-grow border-t border-gray-500"></div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                            <FaGoogle className="text-xl text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                            <FaFacebookF className="text-xl text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                            <FaApple className="text-xl text-white" />
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <a href="/register" className="text-purple-300 hover:text-purple-200">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};