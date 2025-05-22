import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const EmailVerification = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        const error = searchParams.get('error');

        const handleVerification = async () => {
            if (token) {
                try {
                    // Verify token validity before storing
                    const testResponse = await fetch('/api/user', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!testResponse.ok) throw new Error('Invalid token');

                    localStorage.setItem('token', token);
                    navigate('/profile');
                } catch (error) {
                    navigate('/login?error=invalid_token');
                }
            } else if (error) {
                navigate(`/login?verification_error=${error}`);
            } else {
                navigate('/login');
            }
        };

        handleVerification();
    }, [navigate, searchParams]);

    return (
        <div className="min-h-screen bg-[var(--bg-purple)] flex items-center justify-center text-white">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white"></div>
                <p className="mt-4">Processing verification...</p>
            </div>
        </div>
    );
};