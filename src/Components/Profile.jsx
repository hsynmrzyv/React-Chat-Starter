// Icons
import ProfileIcon from "../icons/Profile";

// Router
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userId");
    navigate("/sign-in");
  };

  return (
  
  );
};

export default Profile;
