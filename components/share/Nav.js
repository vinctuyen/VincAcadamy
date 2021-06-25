import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import ArrowDown from "./icons/ArrowDown";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function NavAuth(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const listFunc = ["User profile", "Logout"];
  const openMenuPersonal = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuPersonal = (e, reason) => {
    if (reason == "Logout") {
      removeCookie("id");
      router.push("/login");
    }
    if (reason == "backdropClick") {
      console.log("backdropClick");
    }
    setAnchorEl(null);
  };
  return (
    <div className="nav-auth">
      <Container maxWidth="lg" className="container">
        <div className="language">
          <span>Ngôn ngữ</span>
          <div className="icon">
            <ArrowDown />
          </div>
        </div>
        <span className="sign">|</span>
        <div className="auth-function">
          {!props.data ? "Đăng nhập / Đăng kí" : ""}
        </div>
        <div className="auth-profile">
          <Avatar
            alt={props.data.name}
            src={props.data.avatar}
            aria-controls="menu-personal"
            aria-haspopup="true"
            onClick={openMenuPersonal}
          />
          <span>{props.data.name}</span>
          <Menu
            id="menu-personal"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={closeMenuPersonal}
            className="menu-personal"
          >
            {listFunc.map((item, index) => {
              return (
                <MenuItem
                  onClick={(e) => closeMenuPersonal(e, item)}
                  key={index}
                  className="func-profile"
                >
                  <ListItemIcon>
                    {item == "Logout" ? (
                      <ExitToAppIcon fontSize="small" />
                    ) : (
                      <AccountBoxIcon fontSize="small" />
                    )}
                  </ListItemIcon>
                  <Typography variant="inherit">{item}</Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </Container>
    </div>
  );
}

function NavBar() {
  const listNav = ["Trang chủ", "Giới thiệu", "Liên hệ", "Góp ý", "Khóa học"];
  const [active, setActive] = useState("Trang chủ");

  return (
    <div className="nav-bar">
      <Container maxWidth="lg" className="container">
        <div className="logo">VINCACADAMY</div>
        <div className="menu">
          {listNav.map((item, index) => {
            return (
              <div
                className={"category " + (item == active && "active")}
                key={index.toString()}
                onClick={() => setActive(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default function Nav(props) {
  return (
    <div className="nav">
      <NavAuth {...props} />
      <NavBar {...props} />
    </div>
  );
}
