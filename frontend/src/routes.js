import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "Layouts/Home/Home";
import Login from "Layouts/Login/Login";
import Profile from "Layouts/Profile/Profile";
import Signup from "Layouts/Signup/Signup";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <AccountCircleIcon size="12px" />,
    component: <Home />,
    noCollapse: true,
    allow: true,
    isLoggedIn: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <AccountCircleIcon size="12px" />,
    component: <Profile />,
    noCollapse: true,
    allow: true,
    isLoggedIn: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <AccountCircleIcon size="12px" />,
    component: <Login />,
    noCollapse: true,
    allow: false,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon: <AccountCircleIcon size="12px" />,
    component: <Signup />,
    noCollapse: true,
    allow: false,
  },
];

export default routes;
