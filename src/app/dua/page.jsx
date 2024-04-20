import React from "react";
import Nav from "../Component/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <p className="text-1xl font-bold" style={{ color: "blue" }}>
          Du’a
        </p>
      </div>
      <div className=" md:flex py-2 hidden justify-center">
        <div className=" ">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm  md:w-30 ">
              Du’a refers to the act of calling upon or <br />
              praying to a Allah. It is also a means of <br />
              seeking Allah’s guidance, protection, or <br />
              blessings
            </p>
            <br />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="md:h-96   mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3Ook2oZXSY34WcnextMCE39J8X6JaMdMay12EaHFZ7muDrUC83UAsnewcoKGl4P4ingK92q6EumgyOSaeXUhbQZR1uVZBqQdOwl~XWB2bUmZC7I66Q2VggTIgmCLYBl43UFVHeL33wxkQIbQQ~jAxRMMz2Jmsuvb667XOfcbYohFREIeYXyu0LpgPxbsExTPHf2Nsd9gao~24zTeqt3Jr89mLkOrKKhNDXlYwCRIXMpBSjQzu~8RNiQFbMixkWUy2qz~yDMGbn5VoV4YF8wFLOop9aT2vunc6qufpUdls51SxnBg1qB1eASn9FfNUzFXaGVJbVBH3Vn8AIDpL0kvw__"
            alt=""
          />
        </div>
      </div>

      <div className="md:hidden block px-7 py-10">
        <div className="">
          <img
            className="md:h-72 mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3Ook2oZXSY34WcnextMCE39J8X6JaMdMay12EaHFZ7muDrUC83UAsnewcoKGl4P4ingK92q6EumgyOSaeXUhbQZR1uVZBqQdOwl~XWB2bUmZC7I66Q2VggTIgmCLYBl43UFVHeL33wxkQIbQQ~jAxRMMz2Jmsuvb667XOfcbYohFREIeYXyu0LpgPxbsExTPHf2Nsd9gao~24zTeqt3Jr89mLkOrKKhNDXlYwCRIXMpBSjQzu~8RNiQFbMixkWUy2qz~yDMGbn5VoV4YF8wFLOop9aT2vunc6qufpUdls51SxnBg1qB1eASn9FfNUzFXaGVJbVBH3Vn8AIDpL0kvw__"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="md:px-20  ">
            <div className="md:px-20 ">
              <p className="text-sm  md:w-80 ">
                Du’a refers to the act of calling upon or <br />
                praying to a Allah. It is also a means of <br />
                seeking Allah’s guidance, protection, or <br />
                blessings
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
