import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// Assuming AuthPage.jsx is moved to a components directory or similar
// For this example, we'll keep the component name structure but place it in the pages/auth route.
import AuthPage from '../../components/AuthPage'; // Placeholder path

export default function AuthIndex() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            router.replace("/dashboard");
        }
    }, []);

    return (
        <AuthPage />
    );
}
