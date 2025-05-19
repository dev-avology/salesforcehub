

export default function Login({cutbox}) {

    const handleGoogleLogin = () => {
        window.location.href =  `${process.env.NEXT_PUBLIC_API_URL}/api/connect/google`;
    };
    const handleDisqusLogin = () => {

    };

    return (




        <div className="custom-model log contineu">
            <div className="modal-overlay">
                <div className="modal">
                    <div className="new_m_model">
                        <button onClick={handleGoogleLogin}><img src="../images/log4.svg" />Continue with Google</button>
                        <button onClick={handleDisqusLogin}><img src="../images/log1.svg" />Continue with Disqus</button>
                        <button class="cancil-btn" onClick={cutbox}> <img alt="cross.svg" src="../images/cross.svg"></img></button>
                    </div>
                </div>
            </div>
        </div>





    )
}