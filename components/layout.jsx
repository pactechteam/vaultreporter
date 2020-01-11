import React from "react";
import Head from "next/head";

import Header from "./header";

const Layout = ({ user, loading = false, children }) => (
  <div>
    <Header />

    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx>{`
      .container {
        max-width: 42rem;
        margin: 1.5rem auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, "Segoe UI";
      }
    `}</style>
  </div>
);

export default Layout;
