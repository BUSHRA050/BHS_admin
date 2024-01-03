import React, { useState } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box,
} from "@mui/material";
// import Logo from "../../assets/logo.png";
import useStyles from "../../../globalStyles";
import { primaryColor } from "../../../constants/colors";
import AuthBackground from "../../../components/authBackground";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import ReactCodeInput from "react-code-input";
import "./style.css";
// import { send_code } from "../../../apis";
import axios from "axios";

const ForgotPassword = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogin =async () => {
   
    try {
      // let response=await axios.post(send_code,email)
      // console.log(response,"Response");   
    } catch (error) {
      console.log(error,"Error");
    }
    setOpen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: "0 0.2rem 1rem rgb(0 0 0 / 12%)",
    p: 4,
    textAlign: "center",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AuthBackground>
        <div className={classes.paper}>
          <Typography style={{ fontSize: "25px", fontWeight: "600" }}>
            Forgot Password ?
          </Typography>
          <Typography style={{ fontWeight: "500" }}>
            We are sending a code to your email
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            autoFocus
            className={classes.globalInput}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onKeyPress={(e) => (e.key == "Enter" ? handleLogin() : null)}
          />

          <div
            style={{ margin: "10px 0", display: "flex", alignItems: "center" }}
          >
            <ArrowBack
              style={{
                color: primaryColor,
                fontSize: "18px",
                cursor: "pointer",
              }}
            />
            <Typography
              onClick={() => navigate("/login")}
              style={{ color: primaryColor, cursor: "pointer" }}
            >
              Back to login
            </Typography>
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                className={classes.loginBtn}
                size="small"
                onClick={handleLogin}
                disableRipple
              >
                <Typography className={classes.loginBtnText}>
                  Send Code
                </Typography>
              </Button>
            )}
          </div>
        </div>
      </AuthBackground>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography style={{ fontSize: "23px", fontWeight: "600" }}>
              Verify code to reset your password
            </Typography>
            <div className="code-input">
              <ReactCodeInput
                type="text"
                fields={4}
                value={code}
                onChange={(code) => setCode(code)}
              />
            </div>
            <Button
              variant="contained"
              className={classes.loginBtn}
              size="small"
              onClick={handleClose}
              disableRipple
              style={{ width: "80%" }}
            >
              <Typography className={classes.loginBtnText}>Confirm</Typography>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ForgotPassword;
