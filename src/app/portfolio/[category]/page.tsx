import React from "react";

const Category = ({ params }: { params: any }) => {
  console.log(params);

  return (
    <div className="flex flex-col gap-10 ">
      <h1>{params?.category}</h1>
      {[1, 1, 1].map((value, index) => {
        return (
          <div className="flex-1" key={index}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            ipsa nam esse! Distinctio officia ipsum laudantium quaerat dicta
            beatae id excepturi laborum, at ullam repellendus nemo officiis,
            minima cumque dignissimos.
          </div>
        );
      })}
    </div>
  );
};

export default Category;
