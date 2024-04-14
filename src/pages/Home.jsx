import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project is made By{" "}
        <a href="https://www.linkedin.com/in/rahiq-majeed/" style={{ color: "#87CEFA", textDecoration: "none" }}>
         Rahiq Majeed
        </a>
        Click down below to view the website
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/homepagetwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Firefox Redesign
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
