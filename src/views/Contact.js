// import React, { useState } from "react";
// import { Box, Typography, TextField, Button } from "@mui/material";
// import axios from "axios";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/sendEmail", {
//         email,
//         message,
//       });
//       console.log(response.data.message);
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <Box>
//       <Typography variant="h4" align="center" gutterBottom>
//         Contact Me via Email
//       </Typography>
//       <Box display="flex" justifyContent="center" mb={4}>
//         <Box maxWidth="600px">
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Your Email"
//               variant="outlined"
//               value={email}
//               onChange={handleEmailChange}
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               id="message"
//               name="message"
//               label="Your Message"
//               variant="outlined"
//               value={message}
//               onChange={handleMessageChange}
//               margin="normal"
//             />
//             <Box textAlign="center">
//               <Button variant="contained" color="primary" type="submit">
//                 Send Email
//               </Button>
//             </Box>
//           </form>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default EmailForm;
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/sendEmail", {
        email,
        message,
      });
      console.log(response.data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me via Email
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
        <Box maxWidth="600px">
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Your Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
            />
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Your Message"
              variant="outlined"
              value={message}
              onChange={handleMessageChange}
              margin="normal"
            />
            <Box textAlign="center">
              <Button variant="contained" color="primary" type="submit">
                Send Email
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box maxWidth="600px" width="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29338.87625192641!2d72.59424776526618!3d23.193564556958155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a2042292cf9%3A0x3d2432affb1a8e98!2sSargasan%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717157897636!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailForm;
