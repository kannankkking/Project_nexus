import { useState } from 'react'
import styles from   "../Signup/Signup.module.css"
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
function Signup() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [mail, setmail] = useState('');
    const navigate = useNavigate();

    const login = () => {
        if (username === "Admin" && mail==="kannan@gmail.com" && password === "123456") { 
          navigate("/Home")
        }
        else if(username == '' && password == ''){
          alert("Please fill in all fields")
        }
        else if(password.length < 6){
            alert("password length must be 6 character")
          }

        else {
          alert("Wrong Username or Password")
        }
    }
  

    return (
        <div className={styles.header}>
            <div className={styles.img}></div>
            <div className={styles.container}>
               <h3 >Signup</h3>
                <input onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Username' />
                <input  onChange={(e)=>setmail(e.target.value)} type='text' placeholder='G-Mail' />
                <input  onChange={(e)=>setpassword(e.target.value)} type='password' placeholder='Password' />
               

                <button className={styles.bttn} onClick={login} type='submit'>Signup</button>
                <p>Do you have an account <a href='/Signin'>Signin</a></p>
                <div className={styles.icons}>
           <a href='https://myaccount.google.com/' target='_blank'><FaGoogle className={styles.icon}/></a>
           <a href='https://www.facebook.com/login.php/'target='_blank'> <FaFacebook className={styles.icon}/></a>
            </div>
            </div>
        </div>
    )
}

export default Signup;
