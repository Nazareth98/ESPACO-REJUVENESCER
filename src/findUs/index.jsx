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
import Aos from "aos";
import "aos/dist/aos.css";


const FindUs = () => {
  const mobileScreen = window.innerWidth
  
  React.useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  const infoList = {
    faleConosco: [
      {
        id: 1,
        content:
          "R. Rui Barbosa, 2126 - Vila Bom Jesus",
        icon: location,
        url: "https://www.google.com.br/maps/place/R.+Rui+Barbosa,+2126+-+Vila+Bom+Jesus,+Foz+do+Igua%C3%A7u+-+PR,+85852-120/@-25.5389425,-54.5741244,17z/data=!3m1!4b1!4m5!3m4!1s0x94f690539d17b1d5:0x786e4c74b6acb49!8m2!3d-25.5389474!4d-54.5719357",
      },
      {
        id: 2,
        content: "(45) 98407-0668",
        icon: whatsapp,
        url: "https://api.whatsapp.com/send?phone=5545984070668&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!",
      },
      {
        id: 3,
        content: "rejuvenescerfoz@hotmail.com",
        icon: email,
        url: "/",
      },
    ],
    socialMedia: [
      {
        id: 1,
        content: "Rejuvenescer",
        icon: facebook,
        url: "https://www.facebook.com/draraissaraldi/",
      },
      {
        id: 2,
        content: "Rejuvenescer",
        icon: instagram,
        url: "https://www.instagram.com/raissa_araldi.odontologia/",
      },
    ],
    horarios: [
      {
        id: 1,
        content: "Segunda a Sexta: das 08h as 18h30",
        icon: clock,
        url: "/",
      }
    ],
  };

  const images = [
    { url: nosEncontre },
    { url: nosEncontre },
    { url: nosEncontre },
  ];

  return (
    <div data-aos='fade-up' id="find-us" className="w-full md:h-[50rem]">
      <Subtitle value="Onde Nos Encontrar" />
      <div className="xl:w-4/6 w-full m-auto flex md:flex-row flex-col justify-center ">
        <div data-aos='fade-up' data-aos-once="true" className="md:h-50 md:p-10 m-auto py-8">
          <Slider images={images} width = {mobileScreen < 1280 ? 370 : 500} height = {mobileScreen < 1280 ? 370 : 500}/>
        </div>
        <div data-aos='fade-up' data-aos-once="true" data-aos-duration='1700' className="md:w-1/2 h-50 md:p-10 p-2 flex flex-col justify-between bg-slate-100 rounded-3xl shadow-md">
          <div>
            <h2 className="text-2xl font-bold  text-center mb-2">
              Rejuvenescer - Foz do Iguaçu
            </h2>
          </div>
          <div data-aos='fade-up' data-aos-duration='1900'>
            <FindUsInfo
              titulo="Fale conosco"
              lista={infoList.faleConosco}
              img={arrow}
            />
          </div>
          <div data-aos='fade-up' data-aos-duration='1900'>
            <FindUsInfo
              titulo="Redes Sociais"
              lista={infoList.socialMedia}
              img={arrow}
            />
          </div>
          <div data-aos='fade-up' data-aos-duration='1900'>
            <FindUsInfo
              titulo="Horário de funcionamento"
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
