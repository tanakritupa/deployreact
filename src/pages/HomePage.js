import Contact from "../components/Contact";
import Detail from "../components/Detail";
import EstimatePrice from "../components/EstimatePrice";
// import ExampleInstall from "../components/ExampleInstall";
import ExampleInstallV2 from "../components/ExampleInstallV2";
// import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import HyperSkyTech from "../components/HyperSkyTech";
import InstallCard from "../components/InstallCard";
import ItemLine from "../components/ItemLine";
import Slide from "../components/Slide";

const HomePage = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <>
          <div className="w-full flex flex-col ">
            <div className="px-4">
              <Slide isMobile={isMobile} />
              <InstallCard isMobile={isMobile} />
              <Detail isMobile={isMobile} />
              <EstimatePrice isMobile={isMobile} />
            </div>

            <Highlight isMobile={isMobile} />
            <div className="px-4">
              <ItemLine isMobile={isMobile} />
              {/* ExampleInstallเลือกเอา */}

              {/* <ExampleInstall isMobile={isMobile} /> */}
              <ExampleInstallV2 isMobile={isMobile} />
              <HyperSkyTech isMobile={isMobile} />
              <Contact isMobile={isMobile} />
            </div>
          </div>
          {/* <Footer isMobile={isMobile} /> */}
        </>
      ) : (
        <>
          <div className="flex w-full flex-col justify-center ">
            <Slide isMobile={isMobile} />
            <InstallCard isMobile={isMobile} />
            <Detail isMobile={isMobile} />
            <EstimatePrice isMobile={isMobile} />
            <Highlight isMobile={isMobile} />
            <ItemLine isMobile={isMobile} />
            {/* ExampleInstallเลือกเอา */}

            {/* <ExampleInstall isMobile={isMobile} /> */}
            <ExampleInstallV2 isMobile={isMobile} />
            <HyperSkyTech isMobile={isMobile} />
            <Contact isMobile={isMobile} />
          </div>
          {/* <Footer isMobile={isMobile} /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
