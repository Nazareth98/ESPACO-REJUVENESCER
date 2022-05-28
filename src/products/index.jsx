import React from "react";
import Card from "../components/cards/index";
import Botox from "../assets/botox.jpg";
import Subcisao from "../assets/subcisao.jpg";
import Preenchimento from "../assets/preenchimentoLabial.jpg";
import acupuntura from "../assets/acupuntura.jpg"




import Subtitle from "../components/subTitle";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [show, setShow] = React.useState(false)
  const [ver, setVer] = React.useState(true)

  React.useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  function handleClick(){
    setShow(!show)
    setVer(!ver)
  }

  const produtos = [
    {
      show:true,
      name: "Preenchimento Labial",
      description:
        "Procedimento feito com ácido hialurônico para proporcionar simetria aumentando o volume e definição os lábios",
      img: Preenchimento,
    },
    {
      show:true,
      name: "Subcisão Facial",
      description:
        "Essa técnica corrige alterações relacionadas ao relevo da pele, como cicatrizes, rugas ou linhas de expressão.",
      img: Subcisao,
    },
    {
      show:true,
      name: "Botox",
      description:
        "Rejuvenescimento facial na região da testa ou lateral dos olhos ou glabela.",
      img: Botox,
    },
    {
      show:show,
      name: "Fios de Sustentação",
      description:
        "Promove estimulação de colágeno.",
      img: generic,
    },
    {
      show:show,
      name: "Skinbooster",
      description:
        "Hidratação profunda através de apliacação de ácido hialurônico.",
      img: generic,
    },
    {
      show:show,
      name: "Drenagem Corporal",
      description:
        "Indicada para reduzir retenção de líquido e toxinas que formam edema e inchaço.",
      img:generic,
    },
    {
      show:show,
      name: "Enzima Estria",
      description:
        "Melhora a aparencia das estrias.",
      img: generic,
    },
    {
      show:show,
      name: "Enzima Celulite",
      description:
        "Redução da celulite.",
      img:generic,
    },
    {
      show:show,
      name: "Massagem Modeladora Corporal",
      description:
        "Modelagem corporal por meio de técnicas de massganes e cremes redutores de medidas.",
      img: generic,
    },
    {
      show:show,
      name: "Massagem Relaxante / Ventosas",
      description:
        "Massagem que promove o relaxamento.",
      img: generic,
    },
    {
      show:show,
      name: "Quiropraxia",
      description:
        "Alinhamento correto da coluna e outras partes do corpo. Isso, permite que dores sejam aliviadas, pois a tensão muscular da região e a pressão arterial diminuem",
      img: generic,
    },
    {
      show:show,
      name: "Acupuntura",
      description:
        "Indicada para reduzir retenção de líquido e toxinas que formam edema e inchaço.",
      img: generic,
    },
    {
      show:show,
      name: "Clareamento A Laser",
      description:
        "É uma forma rápida, segura e eficaz de recuperar a cor natural dos dentes, que foi perdida devido à maus hábitos aliados a uma higiene bucal deficiente. O procedimento deixa os dentes mais brancos, deixando seu sorriso muito mais bonito e harmônico.",
      img: generic,
    },
    {
      show:show,
      name: "Facetas de Resinas",
      description:
        "Procedimento rapido sem desgate dos dentes e deixa um sorriso marcante",
      img: generic,
    },
    {
      show:show,
      name: "Liberação Miofascial",
      description:
        "Técnica preventiva de lesões e alívio de dores musculares, que aplica pressão em alguns pontos do corpo a fim de liberar a fáscia.",
      img:generic,
    },
  ];

  return (
    <div id="products" className="w-full ">
      <div className="xl:w-4/6 w-full h-full m-auto flex flex-col items-center">
        <Subtitle value="Nossos Produtos"/>
        <div data-aos ="fade-up" className="grid grid-flow-row grid-cols-1 md:grid-cols-3 justify-around flex-col md:flex-row items-center gap-5 duration-200">
          {produtos.map((produto) => {
            if (produto.show === false)
              return null
            else
             return (
              <Card
                key={produto.name}
                name={produto.name}
                description={produto.description}
                img_url={produto.img}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <button id="btn-verMais" data-aos ="fade-up" className="mt-5 rounded-full bg-[#E6C69D] hover:bg-[#AB8966] py-3 px-5 duration-200 text-white" onClick={handleClick}>{ver ? "Ver Mais" : "Ver Menos"}</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
