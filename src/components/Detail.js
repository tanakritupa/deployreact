import { Link } from "react-router-dom";
import check_icon from "../assets/icon/check-circle-dark.svg";
import syspic1 from "../assets/image/sys1.png";
import syspic2 from "../assets/image/sys2.png";
import syspic3 from "../assets/image/sys3.png";
const info_card = [
  {
    sub_text: "เครื่องชาร์จ 7 kW (สำหรับบ้าน)",
    price: "27,900 บาท",
    main_text:
      "เครื่องชาร์จรุ่น Feyree AC 7kW เดินไฟพร้อมใช้ ราคารวมค่าแรง และเครื่องชาร์จอุปกรณ์​เดินไฟ 18 รายการ",
    loan_text: "*ชำระผ่านบัตรเครดิต ฿29,800 บาท (ผ่อน 0% 3 เดือน)",

    link: "/contact",
    list: [
      "เครื่องทนทาน มาตรฐาน ใช้งานง่าย",
      "เครื่องมีจอแสดงผล มีแอปในมือถือ",
      "ติดตั้ง wall charger",
      "เดินระบบไฟ/วงจรที่ 2 +อุปกรณ์ 18 รายการ",
    ],
  },
  {
    sub_text: "เครื่องชาร์จขนาดมาตฐาน 7 kW",
    price: "27,900 บาท",
    main_text:
      "เครื่องชาร์จขนาดมาตรฐานเพื่อให้บริการสำหรับพนักงาน และลูกค้า",
    loan_text: "*ชำระผ่านบัตรเครดิต ฿29,800 บาท (ผ่อน 0% 3 เดือน)",
    link: "/contact",
    list: [
      "เครื่องทนทาน มาตรฐาน IEC",
      "แพลตฟอร์มใช้งานง่าย ไม่ต้องโหลด App ",
      "ไม่ต้องเติมเงินเข้า Wallet ก่อน",
      "ฟรี แพลตฟอร์ม 2 ปี",
    ],
  },
  {
    sub_text: "เครื่องชาร์จ 22 kW ชาร์จเร็วขึ้่น",
    price: "45,900 บาท",
    main_text:
      "เครื่องชาร์จแบบ 3 เฟส พิกัด 22kW ชาร์จได้เร็วขึ้น",
    loan_text: "*ชำระผ่านบัตรเครดิต ฿45,900 บาท (ผ่อน 0% 3 เดือน)",
    link: "/contact",
    list: [
      "เครื่องทนทาน มาตรฐาน IEC",
      "แพลตฟอร์มใช้งานง่าย ไม่ต้องโหลด App ",
      "ไม่ต้องเติมเงินเข้า Wallet ก่อน",
      "ฟรี แพลตฟอร์ม 2 ปี",
    ],
  },
];
const Detail = (props) => {
  const { isMobile } = props;
  return (
    <div className="mt-20 flex flex-col w-full justify-center">
      {isMobile ? null : (
        <>
          <h2 className="text-6xl font-bold text-center text-blue-400 ">
            ระบบของเรา
          </h2>
          <div className="flex flex-row w-full justify-center py-8">
            {/* Add picture */}
            <div className="flex flex-col items-center">
              <img
                src={syspic2}
                alt="เครื่องชาร์จ"
                className="w-[370px] h-[380px] mx-4 rounded-3xl"
              />
              <p className="text-center text-2xl font-bold mt-4">
                เครื่องชาร์จ
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={syspic3}
                alt="ระบบชาร์จสำหรับลูกค้า"
                className="w-[370px] h-[380px] mx-4 rounded-3xl"
              />
              <p className="text-center text-2xl font-bold mt-4">
                ระบบชาร์จสำหรับลูกค้า
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={syspic1}
                alt="Dashbord สำหรับอาคาร"
                className="w-[370px] h-[380px] mx-4 rounded-3xl"
              />
              <p className="text-center text-2xl font-bold mt-4">
                Dashbord สำหรับอาคาร
              </p>
            </div>
          </div>
        </>
      )}
      {isMobile ? (
        <>
          <section id="service" name="service">
            <h2 className="text-4xl font-bold text-center text-blue-400 ">
              บริการ
            </h2>
            <p className="text-xl  text-center text-gray-600 pt-4">
              บริการออกแบบติดตั้งระบบไฟฟ้า และเครื่องชาร์จรถไฟฟ้า
            </p>
            <p className="text-xl text-center text-gray-600 pt-4">
              สำหรับ องค์กร อาคาร และบ้าน มีให้เลือก 3 บริการดังนี้
            </p>
            <div className="flex flex-wrap justify-center pt-6">
              {info_card.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm  flex flex-col justify-between pt-2"
                >
                  <div className="h-full pt-4 bg-gradient-to-r from-startgradiant to-endgradiant text-white rounded-t-3xl shadow-sm sm:pt-5 ">
                    <div className="flex items-center justify-center">
                      <span className="text-2xl font-bold tracking-tight text-center">
                        {card.price}
                      </span>
                    </div>
                    <h5 className="mb-4 text-xl font-bold text-center">
                      {card.sub_text}
                    </h5>
                  </div>
                  <div className="bg-veryLightGray border-2 border-gray mb-4 rounded-b-3xl p-4 shadow-sm sm:p-5 sm:pt-1">
                    <ul className="space-y-5 my-7">
                      <span className="text-xl font-normal leading-tight text-gray-500 ml-3">
                        {card.main_text}
                      </span>
                      <div className="text-gray-700">
                        {card.list.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <img
                              src={check_icon}
                              className="w-4 h-4 text-blue-700"
                              alt="check icon"
                            />
                            <span className="text-base font-normal leading-tight ml-3">
                              {item}
                            </span>
                          </li>
                        ))}
                      </div>
                    </ul>
                    <Link to="/contact">
                    <button
                      type="button"
                      className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                    >
                      สอบถามเพิ่มเติม
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <section name="service" id="service">
            <h2
              name="service"
              className="text-6xl mt-20 font-bold text-center text-blue-400 "
            >
              บริการ
            </h2>
            <p className="text-3xl  text-center text-gray-600 pt-9">
              บริการออกแบบติดตั้งระบบไฟฟ้า และเครื่องชาร์จรถไฟฟ้า
            </p>
            <p className="text-3xl text-center text-gray-600 pt-4">
              สำหรับ องค์กร อาคาร และบ้าน มีให้เลือก 3 บริการดังนี้
            </p>
            <div className="flex flex-wrap justify-center pt-6">
              {info_card.map((card, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm  flex flex-col justify-between mx-4 pt-2"
                >
                  <div className="h-full bg-gradient-to-r from-startgradiant to-endgradiant text-white rounded-t-3xl shadow-sm sm:pt-5 ">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold tracking-tight text-center">
                        {card.price}
                      </span>
                    </div>
                    <h5 className="mb-4 text-2xl font-bold text-center">
                      {card.sub_text}
                    </h5>
                  </div>
                  <div className="bg-veryLightGray border-2 border-gray rounded-b-3xl shadow-sm sm:p-5 sm:pt-1">
                    <ul className="space-y-5 my-7">
                      <span className="text-xl font-normal leading-tight text-gray-500 ml-3">
                        {card.main_text}
                      </span>
                      <div className="text-gray-700">
                        {card.list.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <img
                              src={check_icon}
                              className="w-4 h-4 text-blue-700"
                              alt="check icon"
                            />
                            <span className="text-base font-normal leading-tight ml-3">
                              {item}
                            </span>
                          </li>
                        ))}
                      </div>
                    </ul>
                    <Link to="/contact">
                    <button
                      type="button"
                      className="border-2 border-sky-500 text-sky-600 rounded-full hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-sm px-5 py-2.5 w-full"
                    >
                      สอบถามเพิ่มเติม
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Detail;
