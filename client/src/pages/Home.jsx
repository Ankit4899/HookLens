import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <h1>Home Page</h1>

      {user ? (
        <>
          <h2>Welcome {user.name}</h2>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </>
  );
}

export default Home;