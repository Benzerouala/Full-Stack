import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        if (!email.includes("@")) {
            alert("L'email doit contenir @");
            return ;
          }
        navigate('/admin')
  };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label className="form-label"> Email</label>
            <input type="text" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label">Password</label>
            <input type="password" className="form-control"  onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit" className="btn btn-primary w-100">
                Se connecter
            </button>
        </form>
    </div>
  )
}
