import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.route";
// import Profil/e from "./routes/profile/profile.route";
// import SignIn from "./routes/sign-in/sign-in.route";
// import SignUp from "./routes/sign-up/sign-up.route";
const SignIn = React.lazy(() => import("./routes/sign-in/sign-in.route"));
const SignUp = React.lazy(() => import("./routes/sign-up/sign-up.route"));
const Profile = React.lazy(() => import("./routes/profile/profile.route"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Component is Loading</p>}>
        <Routes>
          <Route path="/" element={<Navigation></Navigation>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
            <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
