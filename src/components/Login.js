import { useRouter } from 'next/router';

export default function Login({cutbox}) {
       const router = useRouter();

    const handleGoogleLogin = () => {
        const currentPath = router.asPath;
        localStorage.setItem('currentPath', currentPath);
        window.location.href =  `${process.env.NEXT_PUBLIC_API_URL}/api/connect/google`;
        
    };
    const handleDisqusLogin = () => {
        const currentPath = router.asPath;
        localStorage.setItem('currentPath', currentPath);
        window.location.href =  `${process.env.NEXT_PUBLIC_API_URL}/api/connect/github`;
    };

    return (




        <div className="custom-model log contineu">
            <div className="modal-overlay">
                <div className="modal">
                    <div className="new_m_model">
                        <button onClick={handleGoogleLogin}><img src="../images/log4.svg" />Continue with Google</button>
                        <button onClick={handleDisqusLogin}><img src="../images/github.svg" />Continue with Github</button>
                        <button class="cancil-btn" onClick={cutbox}> <img alt="cross.svg" src="../images/cross.svg"></img></button>
                    </div>
                </div>
            </div>
        </div>





    )
}