import { Link } from "react-router-dom";

import icon_line from "../assets/icon/icon_line.svg";
import icon_facebook from "../assets/icon/icon_facebook.svg";
import icon_instagram from "../assets/icon/icon_instagram.svg";

const Contact = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <section id="contract">
          <div className="w-full flex flex-col gap-5 mt-10 text-center">
            <div className="flex-col items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
              <Link
                to="/contact"
                className=" text-primary rounded-full "
              >
                <p className="text-base text-darkGrayishBlue">CONTRACT</p>
                <h1 className="text-3xl font-bold text-blue-400 mt-4">
                  ต่อต่อเรา
                </h1>
                <p>คลิกเพื่อไปยังหน้าติดต่อเรา</p>
              </Link>
            </div>
            <div className="flex-col items-start gap-5 flex p-4 rounded-lg bg-veryLightGray ">
              <div className="flex items-center">
                <img src={icon_line} className="w-8 " alt="Line Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Line
                </h5>
              </div>
              <p className="text-lg font-bold">ID: @fccharge</p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Line"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
            <div className="flex-col items-start gap-5 flex p-4 rounded-lg bg-veryLightGray ">
              <div className="flex items-center">
                <img src={icon_facebook} className="w-8 " alt="Facebook Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Facebook
                </h5>
              </div>
              <p className="text-lg font-bold text-start">
                Dynamo-EVติดตั้งเครื่องชาร์จรถยนต์ไฟฟ้าและระบบไฟฟ้า
              </p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Facebook"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
            <div className="flex-col items-start gap-5 flex p-4 rounded-lg bg-veryLightGray ">
              <div className="flex items-center">
                <img src={icon_instagram} className="w-8 " alt="Instagram Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Instagram
                </h5>
              </div>
              <p className="text-lg font-bold">dynamoevthai</p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Instagram"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section id="contract">
          <div className="w-full flex justify-center flex-row gap-5 mt-10">
            <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
              <p className="text-base text-darkGrayishBlue">CONTRACT</p>
              <Link to="/contact" className="text-primary rounded-full">
                <h1 className="text-3xl font-bold text-blue-400 mt-4">
                  ต่อต่อเรา
                </h1>
              </Link>
            </div>
            <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
              <div className="flex items-center">
                <img src={icon_line} className="w-8" alt="Line Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Line
                </h5>
              </div>
              <p className="text-lg font-bold">ID: @fccharge</p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Line"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
            <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
              <div className="flex items-center">
                <img src={icon_facebook} className="w-8" alt="Facebook Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Facebook
                </h5>
              </div>
              <p className="text-lg font-bold text-start">
                Friendly Charge ติดตั้งเครื่องชาร์จรถยนต์ไฟฟ้าและระบบไฟฟ้า
              </p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Facebook"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
            <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
              <div className="flex items-center">
                <img src={icon_instagram} className="w-8" alt="Instagram Icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Instagram
                </h5>
              </div>
              <p className="text-lg font-bold">dynamoevthai</p>
              <Link to="/contact">
                <button
                  type="button"
                  aria-label="Go to contact page via Instagram"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  คลิกเพื่อไปยังหน้าติดต่อเรา
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;
