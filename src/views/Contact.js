import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import Footer from "../components/common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.time("sendEmailAPI");
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://ishan-backend.onrender.com/sendEmail",
        {
          name,
          email,
          number,
          message,
        }
      );

      console.timeEnd("sendEmailAPI");

      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      toast.success(
        "I have successfully received your message and I will reach out to you shortly. Thank you 🙏"
      );
    } catch (error) {
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box
        id="contacts"
        px={"25px"}
        sx={{
          backgroundColor: "black",
          paddingTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", sm: "52px" },
              textAlign: "center",
              fontWeight: 600,
              marginTop: { xs: "12px", sm: "20px" },
              color: "wheat",
            }}
          >
            Let's Connect 🤝
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              textAlign: "center",
              fontWeight: 600,
              color: "wheat",
              marginTop: "5px",
              marginBottom: "40px",
            }}
          >
            Join my network and let's stay connected. Together, we can share
            ideas, opportunities, grow and collaborate. So DM me now !!
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
                  DM me now !!
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue={name}
                        rules={{ required: "Full Name is required" }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            sx={{ backgroundColor: "white", color: "black" }}
                            type="text"
                            label="Full Name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              field.onChange(e);
                            }}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaUserAlt />
                                </InputAdornment>
                              ),
                            }}
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue={email}
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            sx={{ backgroundColor: "white", color: "black" }}
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              field.onChange(e);
                            }}
                            error={!!errors.email}
                            helperText={
                              errors.email ? errors.email.message : ""
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IoMdMail />
                                </InputAdornment>
                              ),
                            }}
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name="number"
                        control={control}
                        defaultValue={number}
                        rules={{ required: "Phone Number is required" }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            sx={{ backgroundColor: "white", color: "black" }}
                            type="text"
                            label="Phone No."
                            value={number}
                            onChange={(e) => {
                              setNumber(e.target.value);
                              field.onChange(e);
                            }}
                            error={!!errors.number}
                            helperText={
                              errors.number ? errors.number.message : ""
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaPhoneAlt />
                                </InputAdornment>
                              ),
                            }}
                            variant="filled"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        name="message"
                        control={control}
                        defaultValue={message}
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            multiline
                            sx={{ backgroundColor: "white", color: "black" }}
                            minRows={3}
                            variant="filled"
                            label="Your message to me"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              field.onChange(e);
                            }}
                            error={!!errors.message}
                            helperText={
                              errors.message ? errors.message.message : ""
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <BiMessageAltDetail />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
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
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : (
                          "Submit"
                        )}
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
                height: { xs: "400px", md: "530px" },
                backgroundColor: "white",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3668.947168837281!2d72.54353011614684!3d23.13560627557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719565863586!5m2!1sen!2sin"
                width="900"
                height="600"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        <ToastContainer />
      </Box>
      <Box sx={{ paddingTop: "75px", backgroundColor: "black" }}>
        <Footer />
      </Box>
    </>
  );
};

export default EmailForm;
