import React from "react";
import Button from "../components/button/index";
import "./styles.css";
import fullLogo from "../assets/logo01.png";
import fullLogoGold from "../assets/fullLogoGold.png";

const Home = () => {
  return (
    <div className="w-full md:h-[50rem] h-[30rem] home-bg">
      <div className="xl:w-5/6 w-full h-full m-auto flex flex-row justify-end items-center bg-[#252525c6] md:bg-transparent">
        <div className="md:w-1/2 w-full text-center md:p-10">
          <img
            src={window.innerWidth <= 770 ? fullLogoGold : fullLogo}
            alt=""
            className="lg:w-2/3 w-4/5 m-auto tra"
          />
          <p className="text-lg w-3/4 m-auto md:block hidden text-right load-animation">
            A marca é representada por um ícone da silueta de um rosto,
            mostrando a principal área de trabalho do Centro Estético, que vai
            além do sorriso para outros tratamentos estéticos
          </p>
          <div className="mt-5 md:text-right md:w-3/4 md:mx-auto">
            <Button name="Agende seu avaliação" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
