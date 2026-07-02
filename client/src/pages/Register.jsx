// // import { useState } from "react";
// // import { useNavigate ,Link} from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // function Register() {
// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     register(
// //       formData.name,
// //       formData.email,
// //       formData.password
// //     );

// //     navigate("/login");
// //   };

// //   return (
// //     <>
// //     <form onSubmit={handleSubmit}>
// //       <h2>Register</h2>

// //       <input
// //         type="text"
// //         name="name"
// //         placeholder="Name"
// //         value={formData.name}
// //         onChange={handleChange}
// //       />

// //       <br /><br />

// //       <input
// //         type="email"
// //         name="email"
// //         placeholder="Email"
// //         value={formData.email}
// //         onChange={handleChange}
// //       />

// //       <br /><br />

// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="Password"
// //         value={formData.password}
// //         onChange={handleChange}
// //       />

// //       <br /><br />

// //       <button>Register</button>
// //     </form>
// //       <p>
// //         Already registered? <Link to="/login">Login</Link>
// //       </p>
// //     </>
// //   );
// // }

// // export default Register;/

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Register() {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await register(formData);
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <button type="submit">Register</button>
//       </form>

//       <p>
//         Already registered? <Link to="/login">Login</Link>
//       </p>
//     </>
//   );
// }

// export default Register;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(
        formData.username,
        formData.email,
        formData.password
      );

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Register;