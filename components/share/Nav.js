import ArrowDown from "./icons/ArrowDown";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";

function NavAuth() {
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
        <div className="auth-function">Đăng nhập / Đăng kí</div>
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

export default function Nav() {
  return (
    <div className="nav">
      <NavAuth />
      <NavBar />
    </div>
  );
}
