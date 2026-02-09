import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell() {
  return (
    <>
      <Header />
      <main>
        {/* nested routes render here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
