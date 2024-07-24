import chargerpicture from "../assets/image/chrager_Layer_1.png";

const HyperSkyTech = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <section id="hypersky">
          <div className="w-full mt-10 text-center flex flex-col items-center">
            <p className="text-xl text-darkGrayishBlue">Hyperskytect Co.,ltd</p>
            <br />
            <h2 className="text-3xl font-bold text-center inline-block text-blue-400 bg-clip-text">
              ไฮเปอร์สกายเทค
            </h2>
            <br />
            <h2 className="text-2xl font-bold text-center text-blue-400 ">
              ผู้นำด้านพัฒนาแพลตฟอร์มสำหรับชาร์จรถยนต์ไฟฟ้าให้กับองค์กร
            </h2>
            <br />
            <br />
            <div className="flex justify-center">
              <img src={chargerpicture} className="" alt="" />
            </div>
            <br />
            <p className="text-xl text-darkGrayishBlue">
              เรามีวิสัยทัศน์จะเป็นบริษัทอันดับ 1
              ของไทยที่ให้บริการระบบดูแลระบบชาร์จรถยนต์ไฟฟ้าให้กับองค์กร
              และติดตั้งเครื่องชาร์จให้กับบ้านที่อยู่อาศัย
              โดยใช้เครื่องชาร์จและระบบไฟฟ้าที่มีคุณภาพ มาตรฐาน มอก./IEC
              พร้อมส่งมอบบริการชั้นเลิศและสินค้าที่มีคุณภาพระดับโลกในราคาที่จับต้องได้และคุ้มค่าการลงทุน
              อีกทั้งยังให้คำแนะนำและเป็นที่ปรึกษาอย่างจริงใจ
              เพื่อความประทับใจของผู้ใช้รถยนต์ไฟฟ้าทั่วประเทศไทยประเทศไทย
            </p>
          </div>
        </section>
      ) : (
        <section id="hypersky">
          <div className="max-w-7xl px-5 mx-auto mt-32 text-center flex flex-col items-center">
            <p className="text-3xl text-darkGrayishBlue">
              Hyperskytect Co.,ltd
            </p>
            <br />
            <h2 className="text-6xl font-bold text-center inline-block text-blue-400 bg-clip-text">
              ไฮเปอร์สกายเทค
            </h2>
            <br />
            <h2 className="text-4xl font-bold text-center text-blue-400 ">
              ผู้นำด้านพัฒนาแพลตฟอร์มสำหรับชาร์จรถยนต์ไฟฟ้าให้กับองค์กร
            </h2>
            <br />
            <br />
            <div className="flex justify-center">
              <img src={chargerpicture} className="" alt="" />
            </div>
            <br />
            <p className="text-3xl text-darkGrayishBlue">
              เรามีวิสัยทัศน์จะเป็นบริษัทอันดับ 1
              ของไทยที่ให้บริการระบบดูแลระบบชาร์จรถยนต์ไฟฟ้าให้กับองค์กร
              และติดตั้งเครื่องชาร์จให้กับบ้านที่อยู่อาศัย
              โดยใช้เครื่องชาร์จและระบบไฟฟ้าที่มีคุณภาพ มาตรฐาน มอก./IEC
              พร้อมส่งมอบบริการชั้นเลิศและสินค้าที่มีคุณภาพระดับโลกในราคาที่จับต้องได้และคุ้มค่าการลงทุน
              อีกทั้งยังให้คำแนะนำและเป็นที่ปรึกษาอย่างจริงใจ
              เพื่อความประทับใจของผู้ใช้รถยนต์ไฟฟ้าทั่วประเทศไทยประเทศไทย
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default HyperSkyTech;
