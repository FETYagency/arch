import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import RoutTracker from "../components/routeTracker";
export default function Root() {
  return (
    <>
      <Header />
      <RoutTracker />
      <Outlet />
      <Footer />
    </>
  );
}
