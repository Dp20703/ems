import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">
        hello <br />
        <span className="text-3xl font-semibold">{user?.FirstName} 👋</span>
      </h1>
      <Link
        to={"/logout"}
        className="rounded-sm bg-red-600 px-5 py-2 text-white text-lg font-medium"
      >
        Log out
      </Link>
    </div>
  );
};

export default Header;
