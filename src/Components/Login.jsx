import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

let Login = () => {

    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 
    const navigate = useNavigate();

    let moveToDash = () => {
    navigate('/')
    };

    let handleLogin = () => {
if (username === "")
{
    alert("Fill Required Username");
}

else if (email === "")
{
    alert("Fill Required Email");
} 

else if (password === "")
{
    alert("Fill Required Password");
}
else{
    navigate('/')
}
    }

    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LOGIN</title>
  <link
    rel="icon"
    href="https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/authentication-16.png"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
    integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    body{\n    border: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.parentMost\n{\n    background-image: url("https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg");\n    background-size: cover;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n.container\n{\n    width: 30%;\n    height: 80%;\n    background-color: rgba(0, 0, 255, 0.6);\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    gap: 2.5%;\n    color: white;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    right: 10%;\n}\n.div1\n{\n    width: 90%;\n}\ninput{\n    width: 100%;\n    height: 40%;\n    background-color: rgb(0, 0, 100);\n    border-radius: 4px;\n    border: 0;\n    padding-left: 4px;\n    color: grey;\n    font-size: small;\n}\ninput::placeholder{\n    color: rgba(255, 255, 255, 0.7);\n}\ninput:focus\n{\n    outline: none;\n}\nbutton{\n    border-radius: 4px;\n    border: 0;\n    transition: all 0.2s ease-in-out;\n    font-weight: bold;\n}\nbutton:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.login\n{\n    width: 85%;\n    height: auto;\n    background-color: white;\n    margin-top: 2%;\n    color: rgb(0, 0, 70);\n}\n.parentDiv\n{\n    width: 70%;\n    display: flex;\n    justify-content: center;\n    height: auto;\n    gap: 20px;\n}\n.innerDiv\n{\n    width: 20%;\n    height: 100%;\n}\n.google, .facebook{\n    color: white;\n}\n\na{\n    color: white;\n}\na:hover\n{\n    cursor: pointer;\n}\n\n.textDiv\n{\n    text-align: center;\n}\n\nh1\n{\n    text-align: center;\n}\n\n/* MEDIA QUERIES */\n@media(max-width: 700px)\n{\n    .parentMost\n    {\n        justify-content: center;\n    }\n\n    .container\n    {\n        width: 75%;\n    }\n}\n\n@media (max-width: 900px)\n{\n    .parentMost\n    {\n        justify-content: center;\n    }\n    .container{\n        margin: 0;\n    }\n}\n@media (min-width: 900px) and (max-width: 1100px)\n{\n    .google, .facebook{\n        transform: scale(0.75);\n    }\n    .container\n    {\n        width: 50%;\n    }\n}\n@media (min-width: 700px) and (max-width: 900px)\n{\n    .container\n    {\n        width: 50%;\n    }\n    .google, .facebook{\n        transform: scale(0.7);\n    }\n}\n@media (min-width: 480px) and (max-width: 700px)\n{\n    .container\n    {\n        width: 65%;\n    }\n    .google, .facebook{\n        transform: scale(0.7);\n    }\n}\n@media (max-width: 480px)\n{\n    .container\n    {\n        width: 85%;\n    }\n\n    .innerDiv\n    {\n        width: 30%;\n    }\n\n    h1\n    {\n        transform: scale(0.75);\n    }\n\n    .parentDiv\n    {\n        gap: 0;\n    }\n\n    p\n    {\n        transform: scale(0.8);\n        text-align:center;\n    }\n\n    .div1\n    {\n        font-size: small;\n    }\n\n    .login\n    {\n        font-size: small;\n    }\n\n\n    input\n        {\n            font-size: x-small;\n        }\n}\n\n@media(max-width: 480px) and (min-width: 325px)\n{\n.textDiv\n    {\n        font-size: small;\n    }\n\n    .google, .facebook{\n        transform: scale(0.7);\n    }\n\n}\n\n@media(max-width: 325px)\n{\n.textDiv\n    {\n        font-size: x-small;\n    }\n\n    .google, .facebook{\n        transform: scale(0.5);\n    }\n}\n\n'
    }}
  />
  <div className="parentMost">
    <div className="container">
      <div>
        <h1>Login Here</h1>
      </div>
      <div className="div1">
        <p>Username</p>
        <input onChange={(e) => setUsername(e.target.value)} type="text" className="name" placeholder="Username" />
      </div>
      <div className="div1">
        <p>Email</p>
        <input onChange={(e) => setEmail(e.target.value)} type="text" className="email" placeholder="Email or Phone" />
      </div>
      <div className="div1">
        <p>Password</p>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="password" placeholder="Password" />
      </div>
      <button onClick={handleLogin} className="login">Login</button>
      <div className="parentDiv">
        <button onClick={moveToDash} type="button" className="btn btn-primary google">
          <i className="fa-brands fa-google" />
          Google
        </button>
        <button onClick={moveToDash} type="button" className="btn btn-danger facebook">
          <i className="fa-brands fa-facebook-f" />
          Facebook
        </button>
      </div>
      <div className="textDiv">
        Don't have an account? <Link to='/register'>Create Here</Link>
      </div>
    </div>
  </div>
</>

    )
}

export default Login