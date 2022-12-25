import { Fragment } from "react";
import Navbar from "./Navbar";
import Products from "../Products";

function Layout() {
  return (
    <Fragment>
      <Navbar />
      <Products />
    </Fragment>
  );
}

export default Layout;
