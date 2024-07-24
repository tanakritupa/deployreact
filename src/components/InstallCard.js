import icon_building from "../assets/icon/building_Mode.svg";
import icon_hotel from "../assets/icon/hotel_Mode.svg";
import icon_office from "../assets/icon/Isolation_Mode.svg";
import icon_restaurent from "../assets/icon/restaurant_Mode.svg";

const InstallCard = (props) => {
  const { isMobile } = props;

  return (
    <>
      {isMobile ? (
        <>
          <section id="installcard" className="mt-[100px] w-full flex flex-col">
            <h2 className=" text-center text-blue-400  text-4xl   ">
              ติดตั้งได้ทุกพื้นที่
            </h2>
            <div className="w-full flex justify-center mt-10 ml-4 ">
              <div className="w-full justify-between flex mt-5 gap-5 overflow-x-auto">
                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-blue-500 bg-opacity-20 rounded-full">
                    <img src={icon_building} className="w-30 " alt="" />
                  </div>
                  <h5 className="text-sm font-bold mt-4">อาคารสำนักงาน</h5>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-blue-500 bg-opacity-20 rounded-full">
                    <img src={icon_hotel} className="w-30 " alt="" />
                  </div>
                  <h5 className="text-sm font-bold mt-4">โรงแรม</h5>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-blue-500 bg-opacity-20 rounded-full">
                    <img src={icon_office} className="w-30" alt="" />
                  </div>
                  <h5 className="text-sm font-bold mt-4">ข้าราชการ</h5>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-blue-500 bg-opacity-20 rounded-full">
                    <img src={icon_restaurent} className="w-30" alt="" />
                  </div>
                  <h5 className="text-sm font-bold mt-4">ร้านอาหาร</h5>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section id="installcard" className="mt-[100px]">
          <h2 className=" text-center text-blue-400  text-6xl  ">
            ติดตั้งได้ทุกพื้นที่
          </h2>
          <div className="w-full flex justify-center">
            <div className="w-[944px] justify-between flex mt-[60px] ">
              <div className="flex flex-col items-center">
                <div className="w-[140px] h-[140px] bg-blue-500 bg-opacity-20 rounded-full">
                  <img src={icon_building} className="w-30 " alt="" />
                </div>
                <h5 className="text-2xl font-bold mt-4">อาคารสำนักงาน</h5>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[140px] h-[140px] bg-blue-500 bg-opacity-20 rounded-full">
                  <img src={icon_hotel} className="w-30 " alt="" />
                </div>
                <h5 className="text-2xl font-bold mt-4">โรงแรม</h5>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[140px] h-[140px] bg-blue-500 bg-opacity-20 rounded-full">
                  <img src={icon_office} className="w-30" alt="" />
                </div>
                <h5 className="text-2xl font-bold mt-4">หน่วยงานข้าราชการ</h5>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[140px] h-[140px] bg-blue-500 bg-opacity-20 rounded-full">
                  <img src={icon_restaurent} className="w-30" alt="" />
                </div>
                <h5 className="text-2xl font-bold mt-4">ร้านอาหาร</h5>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InstallCard;
