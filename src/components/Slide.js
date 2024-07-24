import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import banner_charger1 from "../assets/image/Banner.png";
import banner_charger2 from "../assets/image/promo_picture.png";
import { Link } from "react-router-dom";
// import { ScrollLink } from "react-scroll";

function Slide(props) {
  const { isMobile } = props;
  const slides = [
    {
      url: banner_charger1,
      main_text1: "สร้างรายได้",
      main_text2: "ให้กับพื้นที่ของคุณ",
      subtext: "FRIENDLY CHARGE",
      link: "/contact",
    },
    {
      url: banner_charger2,
      main_text1: "Promotion",
      main_text2: "สถานีชาร์จ 7kW เริ่มต้น 27,900 บาท",
      subtext: "FRIENDLY CHARGE",
      link: "/contact",
    },

    // Add other images and text if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {isMobile ? (
        <div className="flex w-full h-[500px] py-4 group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative mt-[100px]"
          >
            <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
              <p className="max-w-sm text-center text-lg text-gray-700 md:text-left mb-2">
                {slides[currentIndex].subtext}
              </p>
              <h2 className="text-stone-600  text-4xl text-left mb-4">
                {slides[currentIndex].main_text1}
              </h2>
              <h2 className="text-stone-600  text-4xl text-left mb-4">
                {slides[currentIndex].main_text2}
              </h2>

              <Link
                to={slides[currentIndex].link}
                className="p-3 px-6 pt-2 text-white bg-gradient-to-r from-startgradiant to-endgradiant rounded-full baseline hover:bg-brightRedLight"
              >
                สอบถามรายละเอียด
              </Link>
            </div>
            <div className="flex flex-row absolute right-5 bottom-5">
              <div className="block mr-5  text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="block  text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[620px] px-[40px] mt-40 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
          >
            <div className="absolute inset-0 flex flex-col items-start justify-center p-[180px]">
              <p className="max-w-sm text-center text-2xl text-darkGrayishBlue md:text-left mb-2">
                {slides[currentIndex].subtext}
              </p>
              <h2 className="text-stone-600  text-6xl text-left mb-4">
                {slides[currentIndex].main_text1}
              </h2>
              <h2 className="text-stone-600  text-6xl text-left mb-4">
                {slides[currentIndex].main_text2}
              </h2>
              <Link
                to={slides[currentIndex].link}
                className="p-3 px-6 pt-2 text-white bg-gradient-to-r from-startgradiant to-endgradiant rounded-full baseline hover:bg-brightRedLight"
              >
               สอบถามรายละเอียด
              </Link>
            </div>
          </div>
          <div className="flex flex-row absolute right-20 bottom-10">
            <div className="hidden group-hover:block mr-5   text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block  text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Slide;
