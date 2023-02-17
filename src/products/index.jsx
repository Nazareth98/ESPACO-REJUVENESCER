import React from "react";
import Card from "../components/cards/index";
import Botox from "../assets/botox.jpg";
import Subincisao from "../assets/subcisao.jpg";
import Preenchimento from "../assets/preenchimentoLabial.jpeg";
import Acupuntura from "../assets/acupuntura.jpeg"
import Celulite from "../assets/celulite.jpg"
import Clareamento from "../assets/clareamento.jpeg"
import Drenagem from "../assets/drenagemCorporal.jpeg"
import Estrias from "../assets/enzimaEstrias.jpeg"
import Facetas from "../assets/facetas.jpeg"
import Sustentacao from "../assets/fiosSustentacao.jpeg"
import Miofascial from "../assets/liberacaoMiofascial.jpeg"
import Modeladora from "../assets/massagemModeladora.jpeg"
import Quiropraxia from "../assets/quiropraxia.jpeg"
import SkinBooster from "../assets/skinbooster.jpeg"
import Ventosa from "../assets/ventosaTerapia.jpeg"
import Relaxante from "../assets/massagemRelaxante.jpg"




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
        "Procedimento feito com ácido hialurônico para proporcionar simetria, aumentando o volume e definição os lábios.",
      img: Preenchimento,
    },
    {
      show:true,
      name: "Subincisão Facial",
      description:
        "O único bioestumulador que apresenta seus resultados em 30 dias, corrigindo alterações na pele, como rugas, cicatrizes e linhas de expressão.",
      img: Subincisao,
    },
    {
      show:true,
      name: "Botox",
      description:
        "A toxina botulínica tem a função de relaxar a musculatura minimizando linhas de expressões, além de auxiliar no combate as rugas.",
      img: Botox,
    },
    {
      show:show,
      name: "Fios de Sustentação",
      description:
        "É um procedimento de rejuvenescimento facial não cirúrgico, que passa os fios sob a pele dando uma aparência mais elevada e tonificada.",
      img: Sustentacao,
    },
    {
      show:show,
      name: "Skinbooster",
      description:
        "Hidratação profunda através do ácido hialurônico. O procedimento trata rugas finas, melhora o aspecto das olheiras e marcas de acne.",
      img: SkinBooster,
    },
    {
      show:show,
      name: "Drenagem Corporal",
      description:
        "Indicada para reduzir retenção de líquido e toxinas que formam edemas e inchaço.",
      img:Drenagem,
    },
    {
      show:show,
      name: "Tratamento de Estrias",
      description:
        "Conjunto  de procedimentos que melhora a aparência das estrias",
      img: Estrias,
    },
    {
      show:show,
      name: "Tratamento de Celulite",
      description:
        "Conjunto de procedimentos que reduz as celulites",
      img:Celulite,
    },
    {
      show:show,
      name: "Massagem Modeladora Corporal",
      description:
        "Massagem modeladora que por meio de técnicas e cremes reduz as medidas do corpo.",
      img: Modeladora,
    },
    {
      show:show,
      name: "Massagem Relaxante",
      description:
        "É indicada pra quem busca diminuir a tensão muscular o estresse diário, alivia dores do corpo e proporciona sensação de relaxamento",
      img: Relaxante,
    },
    {
      show:show,
      name: "Quiropraxia",
      description:
        "Alinhamento correto da coluna e outras partes do corpo. Isso permite que dores sejam aliviadas.",
      img: Quiropraxia,
    },
    {
      show:show,
      name: "Acupuntura",
      description:
        "Seu maior efeito é reduzir a incidência de dores crônicas, como dores na lombar, articulações e enxaqueca.",
      img: Acupuntura,
    },
    {
      show:show,
      name: "Clareamento A Laser",
      description:
        "O procedimento deixa os dentes mais brancos, deixando seu sorriso muito mais bonito e harmônico.",
      img: Clareamento,
    },
    {
      show:show,
      name: "Facetas de Resinas",
      description:
        "Procedimento rápido feito com resina sem desgate dos dentes, corrigindo formato e coloração dos dentes.",
      img: Facetas,
    },
    {
      show:show,
      name: "Liberação Miofascial",
      description:
        "Técnica preventiva de lesões e alívio de dores musculares, que aplica pressão em alguns pontos do corpo a fim de liberar a fáscia (muscular).",
      img:Miofascial,
    },
    {
      show:show,
      name: "Ventosa Terapia",
      description:
        "Trata diversos transtornos da saúde. Principal beneficio é o aumento da circulação sanguínea, amenizando a rigidez muscular e aliviando as dores no corpo.",
      img:Ventosa,
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
