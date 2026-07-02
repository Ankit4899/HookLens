// import { useEffect, useState } from "react";
// import { getEndpoints } from "../services/endpoint.service";
// import CreateEndpoint from "../components/CreateEndpoint";
// import EndpointCard from "../components/EndpointCard";

// function Home() {
//   const [endpoints, setEndpoints] = useState([]);

//   const loadEndpoints = async () => {
//     try {
//       const res = await getEndpoints();
//       setEndpoints(res.data.endpoints);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     loadEndpoints();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <CreateEndpoint
//         refreshEndpoints={loadEndpoints}
//       />

//       <hr />

//       <h2>My Endpoints</h2>

//       {endpoints.length === 0 ? (
//         <p>No Endpoints Found</p>
//       ) : (
//         endpoints.map((endpoint) => (
//           <EndpointCard
//             key={endpoint._id}
//             endpoint={endpoint}
//             refreshEndpoints={loadEndpoints}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default Home;

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
      await login(
        formData.email,
        formData.password
      );

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
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