import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import UserHome from "../UserHome/UserHome";

const Home = () => {
  const loginEmail = useSelector((state) => state.auth.email);
  const admin = loginEmail === "admin@gmail.com";
  // console.log(admin);
  return (
    <div className="home">
      <Header />
      {/* {admin && <AdminHome />} */}
      {!admin && <UserHome />}
      <Footer />
    </div>
  );
};

export default Home;
