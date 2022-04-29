import React from "react";

const FindUsInfo = (props) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <img src={props.img} alt="" />
        <h3 className=" ml-2 text-xl font-semibold text-[#AB8966]">
          {props.titulo}
        </h3>
      </div>
      <div className="px-5 py-2">
        <ul>
          {props.lista.map((item) => (
            <li key={item.id} className="flex flex-row items-center">
              <img src={item.icon} alt="" />
              <a href={item.url} className="ml-2 text-md text-slate-600">
                {item.content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindUsInfo;
