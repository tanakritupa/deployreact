import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import companyLogo from "../assets/icon/FR_logo.svg";
import global_icon from "../assets/icon/global.svg";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = (props) => {
  const { isMobile } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScrollLinkClick = (to) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.querySelector(to).scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(to).scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {isMobile ? (
        <>
          <nav className="flex w-full z-50 fixed justify-between items-center h-[100px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-4">
            <Link to="/">
              <img src={companyLogo} alt="Company Logo" />
            </Link>
            <div className="relative">
              <button
                className="text-white focus:outline-none"
                onClick={toggleDropdown}
                aria-label="Toggle menu"
              >
                <RiMenu3Line size={30} />
              </button>
            </div>
          </nav>
          {isDropdownOpen && (
            <div className="fixed flex flex-col gap-5 font-bold mt-[100px] w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white h-64 px-4 left-0 z-20">
              <button
                onClick={() => handleScrollLinkClick("#service")}
                className="hover:text-darkGrayishBlue"
                aria-label="Scroll to service section"
              >
                บริการ
              </button>
              <button
                onClick={() => handleScrollLinkClick("#highlight")}
                className="hover:text-darkGrayishBlue"
                aria-label="Scroll to highlight section"
              >
                จุดเด่น
              </button>
              <button
                onClick={() => handleScrollLinkClick("#hypersky")}
                className="hover:text-darkGrayishBlue"
                aria-label="Scroll to hypersky section"
              >
                สินค้า
              </button>
              <Link to="/about" className="hover:text-darkGrayishBlue">
                เกี่ยวกับเรา
              </Link>
              <Link to="/contact" className="hover:text-darkGrayishBlue">
                ติดต่อเรา
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="px-32 flex top-0 fixed bg-gradient-to-r items-center from-sky-500 to-indigo-500 w-full h-[120px] z-50">
          <Link to="/">
            <img src={companyLogo} alt="Company Logo" />
          </Link>
          <div className="px-60 flex w-full items-center justify-between text-white text-xl">
            <button
              onClick={() => handleScrollLinkClick("#service")}
              className="hover:text-darkGrayishBlue"
              aria-label="Scroll to service section"
            >
              บริการ
            </button>
            <button
              onClick={() => handleScrollLinkClick("#highlight")}
              className="hover:text-darkGrayishBlue"
              aria-label="Scroll to highlight section"
            >
              จุดเด่น
            </button>
            <button
              onClick={() => handleScrollLinkClick("#hypersky")}
              className="hover:text-darkGrayishBlue"
              aria-label="Scroll to hypersky section"
            >
              สินค้า
            </button>
            <Link to="/about" className="hover:text-darkGrayishBlue">
              เกี่ยวกับเรา
            </Link>
            <Link to="/contact" className="hover:text-darkGrayishBlue">
              ติดต่อเรา
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={global_icon} alt="Global Icon" />
            <p className="hidden p-3 px-6 pt-2 text-white rounded-full baseline hover:bg-brightRedLight md:block">
              TH
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
