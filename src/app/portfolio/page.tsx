import Link from "next/link";
import React from "react";

const PortFolio = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {["illustration", "applications", "websites"].map((res, index) => {
        return (
          <div key={index} className="flex-1 flex flex-col gap-4">
            <Link href={`/portfolio/${res}`}>{res}</Link>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              odio, nisi ipsam molestiae harum quia possimus distinctio tempore
              alias hic sunt numquam laborum corporis excepturi illum debitis
              ipsum officia suscipit!
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortFolio;
