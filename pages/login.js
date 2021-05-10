import React from "react";
import { Carousel } from "react-responsive-carousel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import EmailIcon from "@material-ui/icons/Email";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";

import BgImage from "../assets/images/login_bg_study.jpg";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import twitter from "../assets/images/twitter.png";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 40,
  padding: "0 25px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};
const styleRegisterBtn = {
  border: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  height: 40,
  padding: "0 25px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};
export default class Login extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      remember: true,
    },
    submitted: false,
  };
  handleChange = (event) => {
    const { formData } = this.state;
    if (event.target.name == "remember") {
      formData[event.target.name] = !formData[event.target.name];
    } else {
      formData[event.target.name] = event.target.value;
    }
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };
  render() {
    const { formData, submitted } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="logo"></div>
          <div className="form">
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
            <div className="content">
              <div className="form_title">
                <div className="title_welcome">Welcome</div>
                <div className="title_note">
                  To keep connected with us please login with your personal
                  information byu email address and password
                </div>
              </div>
              <div className="form_input">
                <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
                  <div className="start-center form_input--email">
                    <span className="icon">
                      <MailOutlineIcon />
                    </span>
                    <TextValidator
                      label="Email address"
                      className="email w-100"
                      onChange={this.handleChange}
                      name="email"
                      value={formData.email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid",
                      ]}
                    />
                  </div>
                  <div className="start-center form_input--email">
                    <span>
                      <LockOutlinedIcon />
                    </span>
                    <TextValidator
                      label="Password"
                      onChange={this.handleChange}
                      className="password w-100"
                      name="password"
                      value={formData.password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="remember-forgot">
                    <div className="remember">
                      <Checkbox
                        checked={formData.remember}
                        onChange={this.handleChange}
                        name="remember"
                      ></Checkbox>
                      Remember
                    </div>
                    <div className="forgot">Forgot password</div>
                  </div>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={style}
                    disabled={submitted}
                  >
                    Login
                  </Button>

                  <Button
                    variant="outlined"
                    style={styleRegisterBtn}
                    className="register"
                  >
                    Register
                  </Button>
                </ValidatorForm>
              </div>
              <div className="form_link">
                <div className="login-with">Or can join with</div>
                <div className="icon-links">
                  <img src={google}></img>
                  <img src={facebook}></img>
                  <img src={twitter}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
