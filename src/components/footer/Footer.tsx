import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <h4>all right reserved</h4>
      <Image src="" width={15} height={15} alt="blog" />
    </div>
  );
};

export default Footer;

// images for exernal domain use that domain into next config file to use that image
