// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode"; 

// const Login = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     role: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:2026/api/auth/login", formData);
//       const token = res.data.token;
//       localStorage.setItem("token", token);

//       const decoded = jwtDecode(token); 
//       const userRole = decoded.role;

//       if (userRole === "admin") {
//         navigate("/dashboard");
//       } else {
//         navigate("/unauthorized");
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4">
//       <div className="w-full max-w-md border rounded-xl shadow-md p-8">
//         <div className="text-center mb-6">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3771/3771401.png"
//             alt="Aurinko Logo"
//             className="w-14 h-14 mx-auto"
//           />
//           <h1 className="text-3xl font-bold text-gray-800 mt-2">AURINKO</h1>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="text-sm text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700">Role</label>
//             <input
//               type="text"
//               name="role"
//               placeholder="e.g. admin"
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    password: '',
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', formData); // withCredentials set in axios instance
      alert(res.data.message || 'Login success ✅');
      navigate('/dashboard'); // ✅ Navigate after success
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-3 w-72 mx-auto mt-28 p-6 border shadow rounded">
      <h2 className="text-xl font-bold text-center mb-2">Admin Login</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
        className="p-2 border rounded"
        required
      />
      <input
        name="role"
        placeholder="Role"
        onChange={handleChange}
        value={formData.role}
        className="p-2 border rounded"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
        className="p-2 border rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginPage;
