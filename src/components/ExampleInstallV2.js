import React from "react";

// Importing images
import img1 from "../assets/image/albumpicture/albumpic1.png";
import img2 from "../assets/image/albumpicture/albumpic2.png";
import img3 from "../assets/image/albumpicture/albumpic3.png";
import img4 from "../assets/image/albumpicture/albumpic4.png";
import img5 from "../assets/image/albumpicture/albumpic5.png";
import img6 from "../assets/image/albumpicture/albumpic6.png";
import img7 from "../assets/image/albumpicture/albumpic7.png";
import img8 from "../assets/image/albumpicture/albumpic8.png";
import img9 from "../assets/image/albumpicture/albumpic9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function ExampleInstallV2(props) {
  const { isMobile } = props;
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center items-center w-full overflow-x-auto  ">
          <div style={{ display: "flex" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
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
        <div className="flex justify-center items-center w-full py-40 ">
          <div className="grid grid-cols-4 h-[600px] gap-5 overflow-x-auto border-2 p-10 rounded-[20px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel-${index}`}
                className="inline-block"
                style={{
                  width: 340,
                  height: 340,
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

export default ExampleInstallV2;
