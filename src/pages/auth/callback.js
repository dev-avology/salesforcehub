// pages/auth/callback.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext'; // Import your context
import API from '../../services/api';

const Callback = () => {
    const router = useRouter();
    const { login } = useAuthContext();
    const [errorMessage, setErrorMessage] = useState('');
    const { id_token, access_token, } = router.query;



    useEffect(() => {

        if (id_token && access_token) {
            const GetToken = async () => {

                try {
                    const res = await API.get(
                        `/api/auth/google/callback?access_token=${access_token}`
                    );


                    localStorage.setItem('jwt', res.data.jwt);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    login();
                    const redirectPath = localStorage.getItem('currentPath') || '/';
                    localStorage.removeItem('currentPath');
                    router.push(redirectPath);
                } catch (err) {
                    const errorMsg = err?.response?.data?.error?.message;
                    console.log(errorMsg);
                    if (errorMsg === 'Email is already taken.') {
                        setErrorMessage('An account with this email already exists. Please login with email/password.');
                    }
                }

            }
            GetToken();


        }
    }, [id_token, access_token, router]);

    return (
        <div>
            <div className="loader-wrapper">
                <div className="spinner" />
                <p className="loading-text">Loading...</p>
                {errorMessage && <div>
                    {errorMessage}
                </div>}
            </div>
        </div>
    )
};

export default Callback;
