import React, { useState } from "react";
import Card from "../../components/Card/Card";
import api from "../../API/api.json";
import CardDetails from "../../components/CardDetails/CardDetails";
import { useSelector } from "react-redux";

import "./Marriage.css";

const Marriage = () => {
const [cards, setCards] = useState(api);
  const { showModal } = useSelector((store) => store.modal);
  return (
    <>
        <div className="main">
        {showModal && <CardDetails />}

        <div className="container">
          {cards.map((card, i) => {
            return <Card data={card} key={i} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Marriage