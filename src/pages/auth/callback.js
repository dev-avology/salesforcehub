// pages/auth/callback.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext'; // Import your context
import API from '../../services/api';

const Callback = () => {
    const router = useRouter();
    const {login} = useAuthContext();
    const { id_token, access_token, } = router.query;

    useEffect(() => {

        if (id_token && access_token) {
            const GetToken = async () => {

                try {
                    const res = await API.get(
                        `/api/auth/google/callback?access_token=${access_token}`
                    );

                    console.log("----->", res.data);
                    localStorage.setItem('jwt', res.data.jwt);  
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    login();
                    router.push('/blog');
                } catch (err) {
                    console.error('Error during auth:', err);
                    res.status(500).send('Auth Failed');
                }

            }
            GetToken();


        }
    }, [id_token, access_token, router]); 

    return <div>Loading...</div>;
};

export default Callback;
