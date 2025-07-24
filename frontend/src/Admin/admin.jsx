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
