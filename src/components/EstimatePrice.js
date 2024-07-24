import { useState } from "react";
import img1 from "../assets/image/albumpicture/albumpic1.png";
import img3 from "../assets/image/albumpicture/albumpic3.png";

const Slider = ({ label, min, max, value, onChange, width }) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        style={{ width: width }}
      />
      <p>
        {value} {label}
      </p>
    </div>
  );
};

const EstimatePrice = (props) => {
  const { isMobile } = props;
  const [selectedPlaceOption, setSelectedPlaceOption] =
    useState("ติดตั้งในอาคาร");
  const [selectedChargerOption, setSelectedChargerOption] =
    useState("charger7kw");
  const [distance, setDistance] = useState(0);
  const [numberOfChargers, setNumberOfChargers] = useState(1);

  const handlePlaceOptionChange = (event) => {
    setSelectedPlaceOption(event.target.value);
  };
  const handleChargerOptionChange = (event) => {
    setSelectedChargerOption(event.target.value);
  };

  const calculatePrice = () => {
    let basePriceLow = 0;
    let basePriceHigh = 0;
    let additionalCost = 0;

    if (selectedPlaceOption === "ติดตั้งในอาคาร") {
      if (selectedChargerOption === "charger7kw") {
        basePriceLow = 34800; // Single price for indoor
        basePriceHigh = 34800; // Same as low since there is no range for indoor
        additionalCost = distance > 10 ? (distance - 10) * 200 : 0;
      } else if (selectedChargerOption === "charger22kw") {
        basePriceLow = 46200; // Single price for indoor
        basePriceHigh = 46200; // Same as low since there is no range for indoor
        additionalCost = distance > 10 ? (distance - 10) * 400 : 0;
      }
    } else if (selectedPlaceOption === "ติดตั้งนอกอาคาร") {
      if (selectedChargerOption === "charger7kw") {
        basePriceLow = 39800;
        basePriceHigh = 89800; // Higher range for outdoor installations
        additionalCost = distance > 10 ? (distance - 10) * 400 : 0;
      } else if (selectedChargerOption === "charger22kw") {
        basePriceLow = 51200;
        basePriceHigh = 81200; // Higher range for outdoor installations
        additionalCost = distance > 10 ? (distance - 10) * 800 : 0;
      }
    }

    let totalPriceLow = (basePriceLow + additionalCost) * numberOfChargers;
    let totalPriceHigh = (basePriceHigh + additionalCost) * numberOfChargers;

    return [totalPriceLow, totalPriceHigh];
  };

  const [priceLow, priceHigh] = calculatePrice();
  const isOutdoor = selectedPlaceOption === "ติดตั้งนอกอาคาร";

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col w-full  px-4">
          <div className="flex flex-col text-xl gap-3">
            <h2 className="text-2xl font-bold py-5 text-blue-300">
              ประมาณราคาการติดตั้ง
            </h2>
            <div className="flex flex-row items-center">
              เลือกประเภทการติดตั้ง
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="installation"
                  value="ติดตั้งในอาคาร"
                  checked={selectedPlaceOption === "ติดตั้งในอาคาร"}
                  onChange={handlePlaceOptionChange}
                />
                ติดตั้งในอาคาร
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="installation"
                  value="ติดตั้งนอกอาคาร"
                  checked={selectedPlaceOption === "ติดตั้งนอกอาคาร"}
                  onChange={handlePlaceOptionChange}
                />
                ติดตั้งนอกอาคาร
              </label>
            </div>
            <p>เลือกขนาดเครื่องชาร์จ</p>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="charger"
                value="charger7kw"
                checked={selectedChargerOption === "charger7kw"}
                onChange={handleChargerOptionChange}
              />
              Charger 7 KW
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="charger"
                value="charger22kw"
                checked={selectedChargerOption === "charger22kw"}
                onChange={handleChargerOptionChange}
              />
              Charger 22 KW
            </label>
            <p>เลือกจำนวนเครื่องชาร์จ</p>
            <Slider
              label="Charger(s)"
              min={1}
              max={10}
              width={"100%"}
              value={numberOfChargers}
              onChange={(e) => setNumberOfChargers(e.target.value)}
            />
            <Slider
              label="meter"
              min={0}
              max={50}
              width={"100%"}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <div className="h-[50px] text-blue-500 border-blue-500 w-full border rounded-[20px] flex items-center justify-center">
              {isOutdoor
                ? `ประมาณราคา: ${priceLow} บาทถึง ${priceHigh} บาท`
                : `ประมาณราคา: ${priceLow} บาท`}
            </div>
            <div
              onClick={() => {
                setSelectedChargerOption("charger7kw");
                setSelectedPlaceOption("ติดตั้งในอาคาร");
                setDistance(0);
                setNumberOfChargers(1);
              }}
              className="h-[50px] text-blue-500 border-blue-500 w-full border rounded-[20px] flex items-center justify-center cursor-pointer"
            >
              reset
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row w-full justify-center p-20">
          <div className="flex flex-col text-xl gap-3">
            <h2 className="text-6xl font-bold pb-10 text-blue-300">
              ประมาณราคาการติดตั้ง
            </h2>
            <div className="flex flex-row items-center">
              เลือกประเภทการติดตั้ง
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="installation"
                  value="ติดตั้งในอาคาร"
                  checked={selectedPlaceOption === "ติดตั้งในอาคาร"}
                  onChange={handlePlaceOptionChange}
                />
                ติดตั้งในอาคาร
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="installation"
                  value="ติดตั้งนอกอาคาร"
                  checked={selectedPlaceOption === "ติดตั้งนอกอาคาร"}
                  onChange={handlePlaceOptionChange}
                />
                ติดตั้งนอกอาคาร
              </label>
            </div>
            <p>เลือกขนาดเครื่องชาร์จ</p>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="charger"
                value="charger7kw"
                checked={selectedChargerOption === "charger7kw"}
                onChange={handleChargerOptionChange}
              />
              Charger 7 KW
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="charger"
                value="charger22kw"
                checked={selectedChargerOption === "charger22kw"}
                onChange={handleChargerOptionChange}
              />
              Charger 22 KW
            </label>
            <p>เลือกจำนวนเครื่องชาร์จ</p>
            <Slider
              label="Charger(s)"
              min={1}
              max={10}
              width={400}
              value={numberOfChargers}
              onChange={(e) => setNumberOfChargers(e.target.value)}
            />
            <Slider
              label="meter"
              min={0}
              max={50}
              width={400}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <div className="h-[50px] text-blue-500 border-blue-500 w-[400px] border rounded-[20px] flex items-center justify-center">
              {isOutdoor
                ? `ประมาณราคา: ${priceLow} บาทถึง ${priceHigh} บาท`
                : `ประมาณราคา: ${priceLow} บาท`}
            </div>
            <div
              onClick={() => {
                setSelectedChargerOption("charger7kw");
                setSelectedPlaceOption("ติดตั้งในอาคาร");
                setDistance(0);
                setNumberOfChargers(1);
              }}
              className="h-[50px] text-blue-500 border-blue-500 w-[400px] border rounded-[20px] flex items-center justify-center cursor-pointer"
            >
              reset
            </div>
          </div>
          <div className="ml-28">
            <div className="w-[320px] h-[200px] rounded mb-10">
              <img src={img1} alt="ตัวอย่างการติดตั้งภายในอาคาร" />
              <p className="text-center">ตัวอย่างการติดตั้งภายในอาคาร</p>
              <br />
              <img src={img3} alt="ตัวอย่างการติดตั้งภายนอกอาคาร" />
              <p className="text-center">ตัวอย่างการติดตั้งภายนอกอาคาร</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EstimatePrice;
