import React from "react";
import Card from "../components/cards/index";
import genericImg from "../assets/genericCard.jpg";
import Subtitle from "../components/subTitle";

const Products = () => {
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
    <div id="products" className="w-full md:h-[40rem]">
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
