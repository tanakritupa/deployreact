import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/600",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/500",
  "https://via.placeholder.com/600",
];

function ExampleInstall(props) {
  const { isMobile } = props;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / 3);

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center items-center w-full overflow-x-auto  ">
          <div style={{ display: "flex" }}>
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`carousel-${index}`}
                style={{
                  width: 250,
                  height: 250,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 20,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full py-40">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-5 ">
              ตัวอย่าง
            </div>
            <div className="text-4xl font-bold  text-blue-400 mb-5 mr-5">
              การติดตั้ง
            </div>

            <div className="flex flex-row gap-5">
              <button
                className="h-[50px] w-[50px] rounded-full bg-gray-300 text-2xl flex justify-center items-center"
                onClick={goToPreviousSlide}
              >
                {"<"}
              </button>
              <button
                className="h-[50px] w-[50px] rounded-full bg-gray-300 text-2xl flex justify-center items-center"
                onClick={goToNextSlide}
              >
                {">"}
              </button>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {images
              .slice(currentSlideIndex * 3, currentSlideIndex * 3 + 3)
              .map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`carousel-${index}`}
                  style={{
                    width: 340,
                    height: 340,
                    marginRight: 10,
                    marginLeft: 10,
                    borderRadius: 20,
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ExampleInstall;
