import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  Link,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/sendEmail", {
        name,
        email,
        number,
        message,
      });
      // console.log(response.data.message);
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (error) {
      // console.error("Error occurred:", error);
    }
  };

  return (
    <Box
      id="contacts"
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        p: 3,
        paddingTop: "75px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Typography sx={{ color: "wheat", paddingBottom: "25px" }} variant="h3">
          Let's get connected
        </Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              color: "black",
              backgroundColor: "#232F3A",
              border: "1px solid wheat",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                align="center"
                paddingBottom={"20px"}
                color={"wheat"}
              >
                Contact Me
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "white", color: "black" }}
                      type="text"
                      label="Full Name"
                      value={name}
                      variant="filled"
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaUserAlt />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "white", color: "black" }}
                      type="email"
                      label="Email"
                      variant="filled"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IoMdMail />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="text"
                      label="Phone No."
                      sx={{ backgroundColor: "white", color: "black" }}
                      variant="filled"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaPhoneAlt />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      sx={{ backgroundColor: "white", color: "black" }}
                      minRows={3}
                      variant="filled"
                      label="Your Message to me"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BiMessageAltDetail />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        width: "100%",
                        color: "white",
                        py: 1.5,
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: "300px", md: "530px" },
              backgroundColor: "white",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29338.87625192641!2d72.59424776526618!3d23.193564556958155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a2042292cf9%3A0x3d2432affb1a8e98!2sSargasan%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717157897636!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      <Grid item sx={{ paddingTop: "25px" }}>
        <Box
          sx={{
            backgroundColor: "#232F3A",
            color: "white",
            width: "100%",
            padding: "10px 20px",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              fontSize: "16px",
              textAlign: { xs: "center", sm: "left" },
              mb: { xs: 1, sm: 0 },
              fontSize:"16px",
            }}
          >
            &copy; 2024 Ishan Sandip Avlani. All rights reserved.
          </Typography>

          {/* <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <IconButton color="inherit">
                <FaFacebook />
              </IconButton>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <IconButton color="inherit">
                <FaTwitter />
              </IconButton>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <IconButton color="inherit">
                <FaLinkedin />
              </IconButton>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <IconButton color="inherit">
                <FaGithub />
              </IconButton>
            </Link>
          </Box> */}
        </Box>
      </Grid>
    </Box>
  );
};

export default EmailForm;
