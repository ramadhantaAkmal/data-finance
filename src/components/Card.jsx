import React from "react";
import { CardInfo } from "./Cards";

/**
 * @param  {{cardInfo: CardInfo}}
 */
const Card = ({ cardInfo }) => {
  return (
    <>
      <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-150 hover:bg-gray-100">
        <img
          className="w-20 mx-auto mt-[-3rem]"
          src={cardInfo.img}
          alt=""
        />
        <h2 className="text-2xl font-bold text-center py-8">
          {cardInfo.title}
        </h2>
        <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">{cardInfo.storage}</p>
          <p className="py-2 border-b mx-8">{cardInfo.grantedUser}</p>
          <p className="py-2 border-b mx-8">{cardInfo.sendUp}</p>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto my-6 px-6 py-3 text-black hover:bg-black hover:text-[#00df9a] duration-150">
          Start Trial
        </button>
      </div>
    </>
  );
};

export default Card;
