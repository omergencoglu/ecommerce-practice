import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h1>Kardesler Store</h1>
      <AiOutlineShoppingCart className={classes.icon} />
    </nav>
  );
}

export default Navbar;
