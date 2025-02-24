import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Naavbar";
import "./Analytixs.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const dataLine = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 1500 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 1800 },
  { name: "May", value: 2200 },
  { name: "Jun", value: 2400 },
  { name: "Jul", value: 2600 },
];

const dataBarDevices = [
  { name: "Mac", value: 2000 },
  { name: "iOS", value: 2500 },
  { name: "Windows", value: 1500 },
  { name: "Android", value: 1800 },
  { name: "Other", value: 1200 },
];

const dataBarLinks = [
  { name: "Link 1", value: 1300 },
  { name: "Link 2", value: 2200 },
  { name: "Link 3", value: 1800 },
  { name: "Link 4", value: 2400 },
];

const dataPie = [
  { name: "YouTube", value: 400 },
  { name: "Facebook", value: 300 },
  { name: "Instagram", value: 300 },
  { name: "Other", value: 200 },
];

const COLORS = ["#66cdaa", "#2ecc71", "#27ae60", "#16a085"];

const Analytixs = () => {
  const [metrics, setMetrics] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState("Clicks on Links");

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setMetrics([
        { title: "Clicks on Links", value: 2318, color: "#" },
        { title: "Click on Shop", value: 7265, color: "#" },
        { title: "CTA", value: 156, color: "#" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="container1">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="contentsss">
          {/* Overview Section */}
          <div className="overview">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="card"
                style={{
                  borderColor: metric.color,
                  backgroundColor:
                    selectedMetric === metric.title ? "#22D679" : "#DCFFEB",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMetric(metric.title)}
              >
                <p
                  style={{
                    color: selectedMetric === metric.title ? "#fff" : "#000",
                  }}
                >
                  {metric.title}
                </p>
                <h2
                  style={{
                    color: selectedMetric === metric.title ? "#fff" : "#000",
                  }}
                >
                  {metric.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Line Chart */}
          <div className="chart-container">
            <LineChart width={600} height={250} data={dataLine}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#000"
                strokeWidth={2}
              />
            </LineChart>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            {/* Bar Chart - Traffic by Device */}
            <div className="chart-box">
              <h3>Traffic by Device</h3>
              <BarChart width={300} height={200} data={dataBarDevices}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2ecc71" />
              </BarChart>
            </div>

            {/* Pie Chart - Sources */}
            <div className="chart-box">
              <h3>Sources</h3>
              <PieChart width={200} height={200}>
                <Pie
                  data={dataPie}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>

            {/* Bar Chart - Traffic by Links */}
            <div className="chart-box">
              <h3>Traffic by Links</h3>
              <BarChart width={300} height={200} data={dataBarLinks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#27ae60" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytixs;
