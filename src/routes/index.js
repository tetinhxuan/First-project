import Products from "../views/Products/Products";
import Courses from "../views/Courses/Courses";
import Blog from "../views/Blog/Blog";
import Admin from "../views/Admin/Admin";
import Home from "../views/Home/Home";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/courses", component: Courses },
  { path: "/blog", component: Blog },
  { path: "/admin", component: Admin },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
