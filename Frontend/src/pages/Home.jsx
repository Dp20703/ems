import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center m-auto">
        <div className=" mt-72 flex flex-col gap-5 justify-center items-center">
          <h1>Get Started..</h1>
          <div className="flex gap-5 justify-center items-center">
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
      </div>
    </>
  );
};

export default Home;
