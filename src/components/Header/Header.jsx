import Container from "../Container/Container.jsx";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="absolute top-0 left-0 w-full z-10 py-8">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[7px]  rounded-[108px] px-[3px] py-[8px] pl-[11px] w-[132px] h-[44px] bg-[#efeff2]">
            <img
              srcSet="./img/Group-big-1x.png 1x, ./img/Group-big-2x.png 2x"
              src="./img/Group-big-1x.png"
              alt="land"
              width="26"
              height="26"
            />
            <a className="font-light text-[16px] text-[#333]/95 cursor-pointer">
              Backyard
            </a>
          </div>
          <ul className="hidden md:flex gap-[4px] border border-[rgba(225,225,226,0.46)] rounded-full p-[3px] h-[44px] bg-[#f2f3f5]">
            {[
              "Home",
              "About",
              "How it works",
              "Token design",
              "YARD flywheel",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-center rounded-full px-4 h-[38px] text-[11px] xl:text-[13px] font-medium text-center hover:bg-[#303030] hover:text-[#fbfbfc]"
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            key="Connect"
            className="hidden md:flex xl:hidden items-center justify-center rounded-full px-4 h-[38px] bg-[#2d2d2d] text-[#f7f7f7] text-[11px] font-medium text-center hover:text-[#d1d1d2] active:bg-[#2d2d2d] active:text-[#595959] "
          >
            Connect
          </button>
          <button
            className="md:hidden border border-gray-300 hover:border-[#303030] rounded-[11px]"
            onClick={toggleMenu}
          >
            <img
              srcSet="./img/menu.svg"
              src="./img/menu.svg"
              alt="menu"
              width="40"
              height="40"
            />
          </button>
          {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
        </nav>
      </Container>
    </section>
  );
};

export default Header;
