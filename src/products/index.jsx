import React, { useRef } from "react";
import Card from "../components/cards/index";
import genericImg from "../assets/genericCard.jpg";
import Subtitle from "../components/subTitle";

const Products = () => {
  const [visible, setVisible] = React.useState()
  const element = useRef(null)

  function initAnimacaoScroll(element) {
    const section = element.current
    if(section){
        const windowMetade = window.innerHeight * 0.6

        function animaScroll() {           
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          //console.log(sectionTop);
          if(isSectionVisible) {
              section.classList.add('ativo')
          }
            
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}

console.log(element.current)

  const produtos = [
    {
      name: "precedimento",
      description:
        "Indicada para combater sinais de envelhecimento da pele, tal como flacidez, linhas de expressão dentre outros.",
      img: genericImg,
    },
    {
      name: "precedimento",
      description:
        "Indicada para combater sinais de envelhecimento da pele, tal como flacidez, linhas de expressão dentre outros.",
      img: genericImg,
    },
    {
      name: "precedimento",
      description:
        "Indicada para combater sinais de envelhecimento da pele, tal como flacidez, linhas de expressão dentre outros.",
      img: genericImg,
    },
  ];

  return (
    <div ref={element} id="products" className="ativo w-full md:h-[40rem]">
      <div className="xl:w-4/6 w-full h-full m-auto">
        <Subtitle value="Nossos Produtos" />
        <div className="flex justify-around flex-col md:flex-row items-center">
          {produtos.map((produto) => {
            return (
              <Card
                name={produto.name}
                description={produto.description}
                img_url={produto.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
