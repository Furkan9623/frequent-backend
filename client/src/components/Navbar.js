import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = ({ loadingStatus }) => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <img
          className="logo"
          src="https://lh3.googleusercontent.com/p/AF1QipOyoyEwh81dCtyDg_cmFXoXQAn8dFwVbBMOIle-=w768-h768-n-o-v1"
          alt=""
        />
        <Link onClick={loadingStatus} to={"/"}>
          ADD USER
        </Link>
        <Link>ABOUT</Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
