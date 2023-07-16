import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

/**
 * @typedef {{img: string; title: string; price: string; storage: string; grantedUser: string; sendUp: string}} CardInfo
 */

const Cards = () => {

  /**
   * @type {CardInfo}
   */
  const cardInfo = [
    {
      img: Single,
      title: "Single User",
      price: "$149",
      storage: "500 GB",
      grantedUser: "1 Granted User",
      sendUp: "Send Up To 2GB",
    },
    {
      img: Double,
      title: "Partnership",
      price: "$199",
      storage: "1 TB Storage",
      grantedUser: "3 Users Allowed",
      sendUp: "Send Up To 10GB",
    },
    {
      img: Triple,
      title: "Group Account",
      price: "$299",
      storage: "5 TB Storage",
      grantedUser: "10 Users Allowed",
      sendUp: "Send Up To 20 GB",
    },
  ];

  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8">
        {cardInfo.map((e) => (
          <Card cardInfo={e} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
