const Footer = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <div className="flex flex-col item-center justify-center w-full px-4 py-10  ">
          <p className="text-xl text-darkGrayishBlue">
            Copyright 2024 Hyperskytech Co.,Ltd 
          </p>
          <p className="text-xl text-darkGrayishBlue text-center">
            All rights reserved.
          </p>
        </div>
      ) : (
        <div className="flex w-full bottom-20 justify-center my-40">
          <p className="text-xl text-center text-darkGrayishBlue">
            Copyright 2024 Hyperskytech Co.,Ltd 
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
