import React from "react";

const Review = ({ review }) => {
 
  const { img, name, city } = review;

  return (
    <div className="card  bg-base-100 shadow-xl z-0">
      <div className="card-body">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h3>{name}</h3>
            <p>{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
