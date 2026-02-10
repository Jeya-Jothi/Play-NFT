import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function PageShell() {
  return (
    <>
      <div className="bg-(--color1) relative z-0 overflow-hidden">
        <Header />
        <main>
          {/* nested routes render here */}
          <Outlet />
        </main>
        <Footer />
        <div
          className="h-120 w-120 rounded-full bg-blue-400 absolute top-20 -left-70 
        blur-3xl opacity-40 -z-1"
        ></div>

        <div
          className="h-120 w-120 rounded-full bg-blue-400 absolute top-120 -right-70 
        blur-3xl opacity-40 -z-1"
        ></div>
      </div>
    </>
  );
}
