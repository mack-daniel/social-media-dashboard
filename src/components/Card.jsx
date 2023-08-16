import React from "react";

const Card = ({ img, name, count, rateStatus, rate, click }) => {
  return (
    <div className="col">
      <div className={`${click && "active"} card py-3 px-5 h-100`}>
        <p
          className={`${
            click && "active"
          } d-flex align-items-center gap-2 justify-content-between`}
        >
          {name}
          <img src={img} alt="" />
        </p>

        <div className="d-flex gap-2 justify-content-between">
          <h2
            className={`${
              click && "active"
            } d-flex align-items-center gap-2 justify-content-between my-auto`}
          >
            {count}
          </h2>
          <p
            className={`${
              rateStatus.includes("down") ? "text-danger" : "text-success"
            } d-flex align-items-center gap-2 my-auto fw-bold`}
          >
            <img src={rateStatus} alt="" />
            {rate}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
