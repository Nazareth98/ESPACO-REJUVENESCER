import React from "react";
import Subtitle from "../components/subTitle";
import nosEncontre from "../assets/nosEncontre.png";
import location from "../assets/location.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import clock from "../assets/clock.svg";
import FindUsInfo from "../components/socialInfo";
import arrow from "../assets/arrow.svg";
import Slider from "../components/slider";

const FindUs = () => {
  const mobileScreen = window.innerWidth

  const infoList = {
    faleConosco: [
      {
        id: 1,
        content:
          "Av. República Argentina, 3339 - Campos do Iguacu",
        icon: location,
        url: "/",
      },
      {
        id: 2,
        content: "(45) 99855-0838",
        icon: whatsapp,
        url: "/",
      },
      {
        id: 3,
        content: "patrickn.contact@gmail.com",
        icon: email,
        url: "/",
      },
    ],
    socialMedia: [
      {
        id: 1,
        content: "Patrick Nazareth",
        icon: facebook,
        url: "/",
      },
      {
        id: 2,
        content: "Patrick Nazareth",
        icon: instagram,
        url: "/",
      },
    ],
    horarios: [
      {
        id: 1,
        content: "Segunda a Sexta: das 08h as 20h",
        icon: clock,
        url: "/",
      },
      {
        id: 2,
        content: "Sábado: das 08h as 12h",
        icon: clock,
        url: "/",
      },
    ],
  };

  const images = [
    { url: nosEncontre },
    { url: nosEncontre },
    { url: nosEncontre },
  ];

  return (
    <div className="w-full md:h-[50rem]">
      <Subtitle value="Onde Nos Encontrar" />
      <div className="xl:w-4/6 w-full m-auto flex md:flex-row flex-col justify-center bg-slate-100 rounded-3xl shadow-md">
        <div className="md:h-50 md:p-10 m-auto py-8">
          <Slider images={images} width = {mobileScreen < 1280 ? 370 : 500} height = {mobileScreen < 1280 ? 370 : 500}/>
        </div>
        <div className="md:w-1/2 h-50 md:p-10 p-2 flex flex-col justify-evenly">
          <div>
            <FindUsInfo
              titulo="Fale conosco"
              lista={infoList.faleConosco}
              img={arrow}
            />
          </div>
          <div>
            <FindUsInfo
              titulo="Redes Sociais"
              lista={infoList.socialMedia}
              img={arrow}
            />
          </div>
          <div>
            <FindUsInfo
              titulo="Horários de funcionamento"
              lista={infoList.horarios}
              img={arrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
