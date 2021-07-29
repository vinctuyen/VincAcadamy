import Container from "@material-ui/core/Container";
import { Carousel } from "react-responsive-carousel";
import BgImage from "../../assets/images/login_bg_study.jpg";
import ArrowDown from "../share/icons/ArrowDown";
import SearchIcon from "../share/icons/Search";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sagaActions } from "../../store/sagas/typeSagas";

function Categories(props) {
  const dispatch = useDispatch();
  const menu = props.categories;
  const [checkedAll, setCheckedAll] = useState(true);
  const [checked, setChecked] = useState(menu.map((item) => item.id));
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
  const updateArr = (arr, item) => {
    let newArr = [...arr];
    if (!newArr.includes(item)) {
      newArr.push(item);
    } else {
      let index = newArr.indexOf(item);
      newArr.splice(index, 1);
    }
    // check select all
    if (newArr.length == menu.length) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
    return newArr;
  };
  function SelectItem(item) {
    let newSelect = updateArr(checked, item);
    setChecked(newSelect);
    console.log(item);
    let data = newSelect;
    dispatch({ type: sagaActions.UPDATE_CATEGORIES, data });
  }

  const SelectAllItem = () => {
    if (checkedAll) {
      setChecked([]);
      setCheckedAll(false);
    } else {
      setChecked(menu);
      setCheckedAll(true);
    }
    let data = menu.map((item) => item.id);
    dispatch({ type: sagaActions.UPDATE_CATEGORIES, data });
  };

  return (
    <div className="dropdown-search" ref={wrapperRef}>
      <div className="content" onClick={() => setIsShow(!isShow)}>
        <div className="list-selected">
          {checkedAll && "All categories"}
          {!checked.length && "All categories"}
          {!checkedAll &&
            checked.map((item, index) => {
              let data = menu.filter((category) => category.id == item);
              return data[0].name + (checked.length - 1 == index ? "" : " ,");
            })}
        </div>

        <div className="icon-dropdown">
          <ArrowDown />
        </div>
      </div>
      <div className={"list-dropdown " + (isShow ? "active" : "")}>
        <FormControlLabel
          key={"all"}
          control={
            <Checkbox checked={checkedAll} onChange={() => SelectAllItem()} />
          }
          label={"All categories"}
        />
        {menu.map((item, index) => {
          return (
            <FormControlLabel
              key={index.toString()}
              control={
                <Checkbox
                  checked={checked.includes(item.id)}
                  onChange={() => SelectItem(item.id)}
                />
              }
              label={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

function Search(props) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.search.categories);
  const listSearchQuestion = useSelector((state) => state.search.data);

  const [isOpenMenuResultSearch, setOpenMenuResultSearch] =
    React.useState(true);

  const handleSearch = (e) => {
    let data = { keyword: e.target.value, categories: categories };
    dispatch({ type: sagaActions.SEARCH, data });
    setOpenMenuResultSearch(true);
  };
  const handleSearchDetail = (e, index) => {
    setOpenMenuResultSearch(false);
  };
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
        <div className="search__content--dropdown">
          <Categories {...props} />
        </div>
        <div className="search__content--input">
          <InputBase
            className="input-search"
            placeholder="Tìm kiếm ..."
            onChange={handleSearch}
          />
          {isOpenMenuResultSearch ? (
            listSearchQuestion.length ? (
              <List className="menu" onClose={handleSearchDetail}>
                {listSearchQuestion.map((item, index) => {
                  return (
                    <ListItem onClick={(e) => handleSearchDetail(e, index)} className="item-menu button">
                      <ListItemText primary={item.question} />
                    </ListItem>
                  );
                })}
                <Divider />
                <ListItem onClick={handleSearchDetail}>
                  show more result ...
                </ListItem>
              </List>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="search__content--search">
          <SearchIcon />
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

export default function SearchAndIntroduce(props) {
  return (
    <Container maxWidth="lg" className="search-introduce">
      <Search {...props} />
      <Introduce />
    </Container>
  );
}
