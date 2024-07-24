import group_charger from "../assets/image/group_charger.png";
import check_circle from "../assets/icon/check-circle.svg";

const Highlight = (props) => {
  const { isMobile } = props;

  const Highlight_text = [
    "ใช้งานง่ายไม่ต้องโหลด App",
    "ไม่ต้องเติมเงินเข้า Wallet",
    "ฟรีค่าแรกเข้า ค่าบริการ 2 ปี",
    "เจ้าของสถานที่ตั้งราคาค่าชาร์จได้",
    "ค่าธรรมเนียมสุดถูกเพียง 4.59% ต่อ Transection",
  ];

  return (
    <>
      {isMobile ? (
        <section
          id="highlight"
          name="highlight"
          className=" bg-gradient-to-r from-startgradiant to-endgradiant p-4 mt-10 flex flex-col w-full"
        >
          <div className="gap-5">
            <h1 className="text-white text-xl ">FRIENDLY CHARGE</h1>
            <h1 className="text-white text-3xl font-bold pb-4">จุดเด่น</h1>
            {Highlight_text.map((text, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={check_circle} className="w-6 h-6 mr-2" alt="" />
                <p className="text-white text-base font-bold ">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <img src={group_charger} className="" alt="" />
          </div>
        </section>
      ) : (
        <section
          id="highlight"
          name="highlight"
          className=" bg-gradient-to-r from-startgradiant to-endgradiant p-28 w-full"
        >
          <div className="items-center grid grid-cols-2">
            <div className="max-w-7xl px-5 mx-auto mt-8 mb-8 grid gap-8">
              <h1 className="text-white text-3xl font-semibold">
                FRIENDLY CHARGE
              </h1>
              <h1 className="text-white text-6xl font-bold">จุดเด่น</h1>
              {Highlight_text.map((text, index) => (
                <div key={index} className="flex items-center">
                  <img src={check_circle} className="w-6 h-6 mr-2" alt="" />
                  <p className="text-white text-xl">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <img src={group_charger} className="" alt="" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Highlight;
