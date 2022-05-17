import React from "react";
import Button from "../components/button/index";
import "./styles.css";
import fullLogo from "../assets/logo01.png";
import fullLogoGold from "../assets/fullLogoGold.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {

  React.useEffect(() => {
    Aos.init({duration: 1700});
  }, [])

  return (
    <div data-aos ='fade' data-aos-once="true" id="home" className="w-full md:h-[50rem] h-[30rem] home-bg home-gradiente">
      <div  className="w-full md:h-[50rem] h-[30rem] home-gradiente">
        <div className="xl:w-4/6 w-full h-full m-auto flex flex-row justify-end items-center bg-[#252525c6] md:bg-transparent">
          <div data-aos ="fade-up" data-aos-duration='2000' className="md:w-1/2 w-full text-center md:p-10">
            <img
              src={window.innerWidth <= 770 ? fullLogoGold : fullLogo}
              alt=""
              className="lg:w-2/3 w-4/5 md:mx-0 md:ml-auto mx-auto"
            />
            <p className="text-lg w-3/4 ml-auto md:block hidden text-right load-animation">
              A marca é representada por um ícone da silueta de um rosto,
              mostrando a principal área de trabalho do Centro Estético, que vai
              além do sorriso para outros tratamentos estéticos
            </p>
            <div data-aos="fade-up" data-aos-duration="2200" className="mt-5 md:text-right md:w-3/4 md:ml-auto">
              <Button name="Agende seu avaliação" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
