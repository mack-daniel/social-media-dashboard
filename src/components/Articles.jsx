import React from "react";

const Articles = ({
  img,
  rateStatus,
  name,
  count,
  subname,
  rate,
  social,
  click,
}) => {
  return (
    <article className="col">
      <div className={`${click && "active"} card h-100 `}>
        <div className={`borders w-100 mb-3 ${social}`}></div>
        <p
          className={`${
            click && "active"
          } secondary-text d-flex align-items-center gap-2 justify-content-center`}
        >
          <img src={img} alt="" className="" />
          {name}
        </p>

        <div className="m2-4">
          <h1 className={`${click && "active"} display-3`}>{count}</h1>
          <h6 className="secondary-text">{subname}</h6>
        </div>
        <p
          className={`${
            rateStatus.includes("down") ? "text-danger" : "text-success"
          } d-flex align-items-center gap-2 justify-content-center fw-bold`}
        >
          <img src={rateStatus} alt="" />
          {rate}%
        </p>
      </div>
    </article>
  );
};

export default Articles;
