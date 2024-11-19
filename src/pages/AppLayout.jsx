import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col items-center font-Montserrat">
      <header className="fixed z-[999] flex w-full bg-aaooBgGray/30 py-2 shadow-sm backdrop-blur-lg md:w-full md:justify-center">
        <NavBar />
      </header>

      <main className="mt-[83px] flex items-center justify-between sm:w-full md:w-[90%]">
        <Outlet />
      </main>

      <footer className="z-[1] flex w-full justify-center bg-aaooBlack">
        <Footer />
      </footer>
    </div>
  );
}
