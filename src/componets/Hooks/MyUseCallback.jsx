import React, { useCallback, useState } from "react";
export default function MyUseCallback() {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileno] = useState("");




  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = {
      username:username,
      lastname:lastname,
      mobileno:mobileno,
      password:'######'
    }
    console.log(formData);
  },[username,lastname,mobileno,password]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name=""
          id=""
        />

        <label htmlFor="">Lastname</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          name=""
          id=""
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name=""
          id=""
        />

        <label htmlFor="">Mobile No</label>
        <input
          type="text"
          value={mobileno}
          onChange={(e) => {
            setMobileno(e.target.value);
          }}
          name=""
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
