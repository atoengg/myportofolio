import React from "react";

const CardCertif = ({
  img,
  title,
  description,
  type,
  catagory1,
  catagory2,
}) => {
  return (
    <>
      <div className="card w-90% bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {type ? <div className="badge badge-secondary">NEW</div> : null}
          </h2>
          <p className="lg:text-justify">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{catagory1}</div>
            <div className="badge badge-outline">{catagory2}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCertif;
