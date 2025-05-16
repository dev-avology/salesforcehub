

export default function Login() {

     const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3002/api/connect/google';
  };
  const handleDisqusLogin = () => {
   
  };

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",gap:"1rem"}}>
            <button onClick={handleGoogleLogin} style={{backgroundColor:"transparent",textAlign:"center"}}><img src="../images/log4.svg" />Continue with Google</button>
            <button onClick={handleDisqusLogin} style={{backgroundColor:"transparent",textAlign:"center"}}><img src="../images/log1.svg" />Continue with Disqus</button>
        </div>
    )
}