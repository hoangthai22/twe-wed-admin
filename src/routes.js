/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Meeting from "layouts/meeting";
import Mentor from "layouts/mentor";
import User from "layouts/user";
import Skill from "layouts/skill";
import Coffee from "layouts/coffee";
import Subject from "layouts/subject";
import Major from "layouts/major";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// @mui icons
import Icon from "@mui/material/Icon";
// function Route() {
//   return <Breadcrumbs title="Navigator" />;
// }

const routes = [
  {
    name: "Navigator",
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Meeting",
    key: "meeting",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/meeting",
    component: <Meeting />,
  },
  {
    type: "collapse",
    name: "Mentor",
    key: "mentor",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/mentor",
    component: <Mentor />,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">person_outline</Icon>,
    route: "/user",
    component: <User />,
  },
  {
    type: "collapse",
    name: "Location",
    key: "coffee",
    icon: <Icon fontSize="small">store</Icon>,
    route: "/location",
    component: <Coffee />,
  },
  {
    divider: true,
  },
  {
    type: "collapse",
    name: "Skill",
    key: "skill",
    icon: <Icon fontSize="small">highlight</Icon>,
    route: "/skill",
    component: <Skill />,
  },
  {
    title: "Documentation",
  },
  {
    type: "collapse",
    name: "Subject",
    key: "subject",
    icon: <Icon fontSize="small">subject</Icon>,
    route: "/subject",
    component: <Subject />,
  },
  {
    type: "collapse",
    name: "Major",
    key: "major",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/major",
    component: <Major />,
  },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    key: "profile",
    route: "/profile",
    component: <Profile />,
  },
  {
    key: "sign-in",
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
