import React from "react";
import style from "./page.module.css";

const Contact = () => {
  return (
    <div>
      <h1>contact us</h1>
      <div className="flex gap-10">
        <h4 className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          voluptate tempora itaque nemo numquam commodi at minus omnis! Mollitia
          asperiores quam numquam cumque aliquam maiores culpa rerum debitis!
          Aliquid, provident!
        </h4>
        <div className="flex flex-col gap-6 flex-1">
          <form action="" className="flex flex-col gap-4 ">
            <input type="text" className={style.input} placeholder="email" />
            <input type="text" className={style.input} placeholder="name" />
            <textarea
              name=""
              id=""
              cols={5}
              rows={10}
              className={style.input}
              placeholder="type here ..."
            ></textarea>
          </form>
          <button className="bg-[#5be] text-white px-4 py-2 w-fit rounded">
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
