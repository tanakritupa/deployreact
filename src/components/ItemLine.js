import delta_ac_mini_7kw from "../assets/image/DeltaACmini.png";
import delta_ac_max_22kw from "../assets/image/DeltaACmax.png";

const ItemLine = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <>
          <section id="hypersky" name="hypersky">
            <div className=" mt-5 text-center flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center text-blue-400 ">
                สินค้า
              </h2>

              <div className="flex flex-col py-4 my-5 gap-5 w-full">
                <div>
                  <img src={delta_ac_mini_7kw} className="" alt="" />
                  <h2 className="text-xl font-bold mt-1 text-center text-blue-400 ">
                    Delta AC mini 7 kw
                  </h2>
                </div>
                <div>
                  <img src={delta_ac_max_22kw} className="" alt="" />
                  <h2 className="text-xl font-bold mt-1 text-center text-blue-400 ">
                    Delta AC MAX 22 kw
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section id="hypersky" name="hypersky">
          <div className=" mt-28 text-center flex flex-col items-center">
            <h2 className="text-6xl mb-28 font-bold text-center text-blue-400  ">
              สินค้า
            </h2>

            <div className="columns-2 gap-8">
              <div className="flex justify-center">
                <div>
                  <img src={delta_ac_mini_7kw} className="" alt="" />
                  <h2 className="text-3xl font-bold mt-1 text-center text-blue-400 ">
                    Delta AC mini 7 kw
                  </h2>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={delta_ac_max_22kw} className="" alt="" />
                  <h2 className="text-3xl font-bold mt-1 text-center text-blue-400 ">
                    Delta AC MAX 22 kw
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemLine;
