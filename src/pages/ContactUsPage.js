import icon_line from "../assets/icon/icon_line.svg";
import icon_facebook from "../assets/icon/icon_facebook.svg";
import icon_instagram from "../assets/icon/icon_instagram.svg";
import line_image from "../assets/image/line.png";
import instagram_page_image from "../assets/image/instagrampage.png";
import facebook_page_image from "../assets/image/facebookpage.png";
import mappicture from "../assets/image/map.png";

const ContactUsPage = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <div className="w-full flex flex-col h-full">
          <div className="text-center text-blue-400 text-2xl py-5 mt-[100px]">
            บริษัท ไฮเปอร์สกายเทค จำกัด
            <p className="text-[#828282] text-xl text-center">Contact</p>
            <div className="mt-5 text-blue-400 text-2xl text-center">
              ติดต่อเรา
            </div>
          </div>

          <div
            className="relative flex flex-row gap-5 mt-10 overflow-x-auto ml-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              MsOverflowStyle: "-ms-autohiding-scrollbar",
            }}
          >
            <div
              className="flex-col w-[80%] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray"
              style={{
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                width: "80%",
              }}
            >
              <div className="flex items-center">
                <img src={icon_line} className="w-8" alt="Line icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Line
                </h5>
              </div>
              <p className="text-lg font-bold">ID: @fccharge</p>
              <a
                href="https://lin.ee/V3Ir79y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary rounded-full"
              >
                <button
                  type="button"
                  aria-label="Follow us on Line"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  ติดตามเลย
                </button>
              </a>
              <img src={line_image} className="w-full" alt="Line QR code" />
            </div>
            <div
              className="flex-col w-[500px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray"
              style={{
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                width: "80%",
              }}
            >
              <div className="flex items-center">
                <img src={icon_facebook} className="w-8" alt="Facebook icon" />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Facebook
                </h5>
              </div>
              <p className="text-lg font-bold text-start">
                FriendlyCharge ติดตั้งเครื่องชาร์จรถยนต์ไฟฟ้าและระบบไฟฟ้า
              </p>
              <a
                href="https://www.facebook.com/FriendlyCharge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary rounded-full"
              >
                <button
                  type="button"
                  aria-label="Follow us on Facebook"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  ติดตามเลย
                </button>
              </a>
              <img
                src={facebook_page_image}
                className="w-full"
                alt="Facebook page"
              />
            </div>
            <div
              className="flex-col w-[500px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray mr-4"
              style={{
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                width: "80%",
              }}
            >
              <div className="flex items-center">
                <img
                  src={icon_instagram}
                  className="w-8"
                  alt="Instagram icon"
                />
                <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                  Instagram
                </h5>
              </div>
              <p className="text-lg font-bold">dynamoevthai</p>
              <a
                href="https://www.instagram.com/DynamoEVThai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary rounded-full"
              >
                <button
                  type="button"
                  aria-label="Follow us on Instagram"
                  className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                >
                  ติดตามเลย
                </button>
              </a>
              <img
                src={instagram_page_image}
                className="w-full"
                alt="Instagram page"
              />
            </div>
          </div>
          <div className="flex flex-col px-4">
            <div>
              <p>Contact Us</p>
              <div>
                <li>Phone number: 0923291524(คุณกอล์ฟ) หรือ 0629164971</li>
                <li>Email: dynamoev.th@gmail.com</li>
                <li>
                  Address: Hyperskytech Ltd., Pibulsongkram road, Tambon Bang
                  Khen, Amphoe Mueang Nonthaburi
                </li>
                <li>Working hours: 6:00AM - 11:00PM</li>
              </div>
            </div>
          </div>
          <img
            src={mappicture}
            alt="Map"
            className="w-full h-[180px] px-4 py-5 rounded-3xl"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-full mt-[200px]">
          <div className="text-center text-blue-400 text-6xl">
            บริษัท ไฮเปอร์สกายเทค จำกัด
          </div>
          <div className="mt-10">
            <div className="flex flex-col w-full items-center">
              <div>
                <p className="text-[#828282] text-xl">Contact</p>
                <div className="mt-5 text-blue-400 text-6xl">
                  ติดต่อเรา
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-row gap-5 mt-10">
              <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
                <div className="flex items-center">
                  <img src={icon_line} className="w-8" alt="Line icon" />
                  <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                    Line
                  </h5>
                </div>
                <p className="text-lg font-bold">ID: @fccharge</p>
                <a
                  href="https://lin.ee/V3Ir79y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary rounded-full"
                >
                  <button
                    type="button"
                    aria-label="Follow us on Line"
                    className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                  >
                    ติดตามเลย
                  </button>
                </a>
                <img src={line_image} className="w-full" alt="Line QR code" />
              </div>
              <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
                <div className="flex items-center">
                  <img
                    src={icon_facebook}
                    className="w-8"
                    alt="Facebook icon"
                  />
                  <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                    Facebook
                  </h5>
                </div>
                <p className="text-lg font-bold text-start">
                  FriendlyCharge ติดตั้งเครื่องชาร์จรถยนต์ไฟฟ้าและระบบไฟฟ้า
                </p>
                <a
                  href="https://www.facebook.com/FriendlyCharge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary rounded-full"
                >
                  <button
                    type="button"
                    aria-label="Follow us on Facebook"
                    className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                  >
                    ติดตามเลย
                  </button>
                </a>
                <img
                  src={facebook_page_image}
                  className="w-full"
                  alt="Facebook page"
                />
              </div>
              <div className="flex-col w-[285px] items-start gap-5 flex p-4 rounded-lg bg-veryLightGray">
                <div className="flex items-center">
                  <img
                    src={icon_instagram}
                    className="w-8"
                    alt="Instagram icon"
                  />
                  <h5 className="text-lg font-bold text-darkGrayishBlue ml-4">
                    Instagram
                  </h5>
                </div>
                <p className="text-lg font-bold">dynamoevthai</p>
                <a
                  href="https://www.instagram.com/DynamoEVThai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary rounded-full"
                >
                  <button
                    type="button"
                    aria-label="Follow us on Instagram"
                    className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                  >
                    ติดตามเลย
                  </button>
                </a>
                <img
                  src={instagram_page_image}
                  className="w-full"
                  alt="Instagram page"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 w-[1170px] mt-[60px]">
            <div>
              <h2 className="text-[#C2B299] font-bold text-4xl">
                ติดต่อ บริษัท
              </h2>
              <h2 className="text-[#C2B299] font-bold text-4xl my-4">
                ไฮเปอร์สกายเทค จำกัด
              </h2>
              <p>Contact Us</p>
              <div>
                <li>Phone number: 0923291524(คุณกอล์ฟ) หรือ 0629164971</li>
                <li>Email: friendlycharge.tech@gmail.com</li>
                <li>
                  Address: Hyperskytech Ltd., Pibulsongkram road, Tambon Bang
                  Khen, Amphoe Mueang Nonthaburi
                </li>
                <li>Working hours: 6:00AM - 11:00PM</li>
              </div>
            </div>
            <div className="w-[486px] h-[315px]">
              <img src={mappicture} alt="Map" className="mx-4 rounded-3xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsPage;
