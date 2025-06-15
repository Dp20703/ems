import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center m-auto">
        <h1>Home</h1>
        <div className=" mt-72 flex gap-5 justify-center items-center">
          <Link
            to={"/login"}
            className="text-xl px-4 py-2 bg-blue-500 rounded-full"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="text-xl px-4 py-2 bg-emerald-500 rounded-full"
          >
            Regsiter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
