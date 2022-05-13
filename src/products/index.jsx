import React, { useRef } from "react";
import Card from "../components/cards/index";
import genericImg from "../assets/genericCard.jpg";
import Botox from "../assets/botox.jpg";
import Subcisao from "../assets/subcisao.jpg";
import Preenchimento from "../assets/preenchimento.jpg";
import Subtitle from "../components/subTitle";

const Products = () => {

  const produtos = [
    {
      name: "Preenchimento Labial",
      description:
        "Indicada para combater sinais de envelhecimento da pele, tal como flacidez, linhas de expressão dentre outros.",
      img: Preenchimento,
    },
    {
      name: "Subcisão Facial",
      description:
        "Essa técnica corrige alterações relacionadas ao relevo da pele, como cicatrizes, rugas ou linhas de expressão.",
      img: Subcisao,
    },
    {
      name: "Botox",
      description:
        "Rejuvenescimento facial na região da testa ou lateral dos olhos ou glabela.",
      img: Botox,
    },
  ];

  return (
    <div id="products" className="ativo w-full md:h-[40rem]">
      <div className="xl:w-4/6 w-full h-full m-auto">
        <Subtitle value="Nossos Produtos"/>
        <div className="flex justify-around flex-col md:flex-row items-center lg:h-[30rem]">
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
