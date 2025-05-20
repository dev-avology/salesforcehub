import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';
import API from '../../services/api'
const Callback = () => {
    const router = useRouter();
    const [errorMessage,setErrorMessage]=useState('');
    const { login } = useAuthContext();
    const { access_token, } = router.query;
    console.log("token", access_token);


    useEffect(() => {

        if (access_token) {
            const GetToken = async () => {

                try {
                    const res = await API.get(
                        `/api/auth/github/callback?access_token=${access_token}`
                    );

                    localStorage.setItem('jwt', res.data.jwt);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    login();
                    router.push('/blog');
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
    }, [access_token, router]);

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
