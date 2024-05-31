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
      
    </Box>
  );
};

export default EmailForm;
