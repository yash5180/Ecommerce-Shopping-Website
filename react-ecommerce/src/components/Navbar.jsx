import logo from "../images/Logo.PNG";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TextFields from "./TextFields";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import SelectSmall from "./SelectSmall";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    return (
    <nav>
    <img src={logo} alt="Logo" id="logo" />
    <div className="Links">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <div className="selectp"><SelectSmall/></div>
        <div className="rightNav">
            <div id="field"><TextFields/></div>
        <NavLink to="/cart">
        <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
        </Badge>
        </NavLink>
        <NavLink to="/login" id="logim">
        <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>Y</Avatar>
        </Stack>
        </NavLink>
        </div>
    </div>
    </nav>
    );
};

export default Navbar;