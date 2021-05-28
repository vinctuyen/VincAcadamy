import Container from "@material-ui/core/Container";
import { Carousel } from "react-responsive-carousel";
import BgImage from "../../assets/images/login_bg_study.jpg";
import ArrowDown from "../share/icons/ArrowDown";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { useState, useRef, useEffect } from "react";

function Categories() {
  const menu = ["All categories", "Item1", "Item2", "Item3", "Item4"];
  const [checked, setChecked] = useState("All categories");
  const [isShow, setIsShow] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsShow(false);
    }
  };
  function SelectItem(item) {
    setChecked(item);
    // setIsShow(false)
  }

  return (
    <div className="dropdown-search" ref={wrapperRef}>
      <div className="content" onClick={() => setIsShow(!isShow)}>
        {checked}
        <div className="icon-dropdown">
          <ArrowDown />
        </div>
      </div>
      <div className={"list-dropdown " + (isShow ? "active" : "")}>
        {menu.map((item, index) => {
          return (
            <FormControlLabel
              key={index.toString()}
              control={
                <Checkbox
                  checked={item == checked}
                  onChange={() => SelectItem(item)}
                />
              }
              label={item}
            />
          );
        })}
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <div className="search__title">
        Discover 32,116 code, scripts and plugins
      </div>
      <div className="search__description">
        All the code you need from PHP to Bootstrap, created by our global
        community of developers.
      </div>
      <div className="search__content">
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
}
function Introduce() {
  return (
    <div className="introduce">
      <Carousel
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={1200}
        infiniteLoop={true}
        interval={4000}
      >
        <div>
          <img src={BgImage} />
        </div>
        <div>
          <img src={BgImage} />
        </div>
        <div>
          <img src={BgImage} />
        </div>
        <div>
          <img src={BgImage} />
        </div>
        <div>
          <img src={BgImage} />
        </div>
        <div>
          <img src={BgImage} />
        </div>
      </Carousel>
    </div>
  );
}

export default function SearchAndIntroduce() {
  return (
    <Container maxWidth="lg" className="search-introduce">
      <Search />
      <Introduce />
    </Container>
  );
}
