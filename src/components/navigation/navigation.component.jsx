import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/sign-in">SignIn</Link>
        <Link to="/sign-up">SignUp</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
