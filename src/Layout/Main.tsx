import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Header";

import React, { useState } from "react";
import type { Page } from "../components/Home/Hero/Hero";

const Main = () => {
  const [activePage, setActivePage] = useState<Page>("home"); 

  // <header className="mb-8">
  //         <Navbar activePage={page} setPage={setPage} />
  //       </header>
  return (
    <div>
      <Navbar activePage={activePage} setPage={setActivePage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
