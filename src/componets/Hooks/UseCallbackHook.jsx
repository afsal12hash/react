import React, { useCallback, useState } from 'react'

export default function UseCallbackHook() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = useCallback((e)=>{

        e.preventDefault();

        console.log(`Username: ${username} \nPassword: ${password}`);
    },[username,password])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="" id="" />

            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="" id="" />
        
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
