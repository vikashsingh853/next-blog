import Image from "next/image";
import nextImage from "public/next.svg";

export default function Home() {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-6 ">
        <h1 className="text-4xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          sapiente, laboriosam molestiae accusamus maxime modi recusandae
          officia illum a sunt possimus mollitia dolores. Officiis provident
          possimus rem vel ab recusandae!
        </p>
        <button className="w-fit px-4 py-2  bg-[#555555] text-[#fff] rounded-md ">
          see our works
        </button>
      </div>
      <Image
        src={nextImage}
        width={200}
        height={200}
        alt=""
        className="flex-1"
      />
    </div>
  );
}
