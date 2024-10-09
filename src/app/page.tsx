'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useLoginMutation } from '@/hooks/useAuth';

export default function SignIn() {
    const { push } = useRouter();
    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { mutate: login } = useLoginMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    const handleSubmit = () =>
        login(
            { ...inputs, expiresInMins: 30 },
            {
                onSuccess: () => {
                    push('/podcasts');
                }
            }
        );

    return (
        <div className="auth-wrapper w-full h-full items-center justify-center flex flex-col min-h-screen">
            <div className="center-wrapper max-w-[320px]">
                <div className="form border-gray-300">
                    <input
                        className="w-full p-3 bg-gray-800 h-10 rounded mb-4 text-white"
                        name="username"
                        placeholder="emilys"
                        type="text"
                        onChange={handleChange}
                    />
                    <input
                        className="w-full p-3 bg-gray-800 h-10 rounded mb-4 text-white"
                        name="password"
                        placeholder="emilyspass"
                        type="password"
                        onChange={handleChange}
                    />
                    <button
                        className="w-full bg-green-700 h-10 rounded text-white hover:bg-green-400 active:scale-105"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
