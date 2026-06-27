// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = login(
//       formData.email,
//       formData.password
//     );

//     if (success) {
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <button>Login</button>
//       </form>

//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </>
//   );
// }

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const success = await login(
        formData.email,
        formData.password
      );

      if (success) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default Login;