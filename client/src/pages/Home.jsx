import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CreateEndpoint from "../components/CreateEndpoint";
import EndpointCard from "../components/EndpointCard";
import { getEndpoints } from "../services/endpoint.service";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [endpoints, setEndpoints] = useState([]);

  const loadEndpoints = async () => {
    try {
      const res = await getEndpoints();
      setEndpoints(res.data.endpoints);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadEndpoints();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>HookLens Dashboard</h1>

      <p>Welcome, <strong>{user?.username}</strong></p>

      <button onClick={handleLogout}>
        Logout
      </button>

      <hr />

      <CreateEndpoint refreshEndpoints={loadEndpoints} />

      <hr />

      <h2>My Endpoints</h2>

      {endpoints.length === 0 ? (
        <p>No Endpoints Found</p>
      ) : (
        endpoints.map((endpoint) => (
          <EndpointCard
            key={endpoint._id}
            endpoint={endpoint}
            refreshEndpoints={loadEndpoints}
          />
        ))
      )}
    </div>
  );
}

export default Home;