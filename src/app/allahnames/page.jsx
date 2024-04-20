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
        <p className="text-1xl font-bold" style={{ color: "#fe7776" }}>
          What are the 99 Names of Allah
        </p>
      </div>
      <div className=" md:flex py-2 hidden justify-center">
        <div className=" ">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm  md:w-30 ">
              The 99 Names of Allah, also known as <br />
              Asma-ul-Husna (The Most Beautiful <br />
              Names), are mentioned in various verses <br />
              of the Quran. Each name reflects a <br />
              different attribute or characteristic of <br />
            </p>
            <br />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="md:h-96   mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/4b5a/7314/ec5838fcde716d64dfca7abac6256d9c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gHf5IDeq5tLRyDVTaaMlMqv-jcPJXaWFm~ZdUctP95y6rdjUWEEVlC4KE0K7c9vhwVvk782xWGTe3VpQKAqhEi2ddsY-r3DIjoL~FxIXN54Jlk31sk4u8wS8~-qYC0Dxr6~WQU0CABOPj~W6T4hm5vvCYnmoxRjkd8WUlzyTY2iJnteQhtFy2LJPCs0CDYWNsf8zIiMZ2~wtFhdNfmjKtqStM4zmfy~~wj~TBQIZUzfxC1Nq0vTrrOjhIiW~fIcm0pyjcYp7o344RlGYgjwzhfB8SE2mmfZE6uxM8GkKJ066h8e~Id3SBbh~70pXXRHl6oCLpYxuBQniwbJOzuP15A__"
            alt=""
          />
        </div>
      </div>

      <div className="md:hidden block px-7 py-10">
        <div className="">
          <img
            className="md:h-72 mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/4b5a/7314/ec5838fcde716d64dfca7abac6256d9c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gHf5IDeq5tLRyDVTaaMlMqv-jcPJXaWFm~ZdUctP95y6rdjUWEEVlC4KE0K7c9vhwVvk782xWGTe3VpQKAqhEi2ddsY-r3DIjoL~FxIXN54Jlk31sk4u8wS8~-qYC0Dxr6~WQU0CABOPj~W6T4hm5vvCYnmoxRjkd8WUlzyTY2iJnteQhtFy2LJPCs0CDYWNsf8zIiMZ2~wtFhdNfmjKtqStM4zmfy~~wj~TBQIZUzfxC1Nq0vTrrOjhIiW~fIcm0pyjcYp7o344RlGYgjwzhfB8SE2mmfZE6uxM8GkKJ066h8e~Id3SBbh~70pXXRHl6oCLpYxuBQniwbJOzuP15A__"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="md:px-20  ">
            <div className="md:px-20 ">
              <br />
              <p className="text-sm  md:w-80 ">
                The 99 Names of Allah, also known as <br />
                Asma-ul-Husna (The Most Beautiful <br />
                Names), are mentioned in various verses <br />
                of the Quran. Each name reflects a <br />
                different attribute or characteristic of <br />
                Allah.
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
