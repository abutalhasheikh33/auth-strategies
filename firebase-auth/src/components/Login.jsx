import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Login = () => {
   
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [user,setUser] = useState()
    const [error,setError] = useState("")
    const auth = getAuth();
    const submit = (e)=>{
        
e.preventDefault()



signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/welcome', { replace: true });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
  });
    }
  return (
    <div className="w-full max-w-xs">
      <h1 className='font-bold text-blue-700 text-xl'>Login</h1>
  <form onSubmit={(e)=>submit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input value={email} onChange={((e)=>setEmail(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input value={password} onChange={((e)=>setPassword(e.target.value))} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      
    </div>
  </form>
 
</div>
  )
}

export default Login