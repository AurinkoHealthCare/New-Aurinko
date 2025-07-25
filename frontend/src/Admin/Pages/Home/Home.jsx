import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const Dash_Home = () => {
  const data = [
    { name: "Mon", visitors: 120 },
    { name: "Tue", visitors: 200 },
    { name: "Wed", visitors: 150 },
    { name: "Thu", visitors: 220 },
    { name: "Fri", visitors: 180 },
    { name: "Sat", visitors: 250 },
    { name: "Sun", visitors: 300 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  const totalVisitors = data.reduce((acc, item) => acc + item.visitors, 0);
  const totalContacts = 75; // later from backend
  const lastUpdated = new Date().toLocaleString();

  const circleData = [
    { name: "Visitors", value: totalVisitors },
    { name: "Contacts", value: totalContacts },
  ];

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Visitors</p>
          <h2 className="text-4xl font-bold text-blue-600">{totalVisitors}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Contacts</p>
          <h2 className="text-4xl font-bold text-green-600">{totalContacts}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Last Updated</p>
          <h2 className="text-lg text-yellow-700">{lastUpdated}</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Weekly Visitors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Summary Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={circleData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {circleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dash_Home;
