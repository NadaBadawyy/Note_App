import img from "../assets/Form.webp";

export default function RegisterImg() {
  return (
    <>
      <div className=" bg-[#F0F4FC] lg:h-screen text-center lg:rounded-ee-3xl lg:rounded-se-3xl  lg:px-10 xl:px-44 shadow-xl  lg:me-32 lg:order-1 order-2  ">
          <div className="p-10 mb-10">
            <p className="text-xl first-letter:text-3xl first-letter:text-[#162F84] font-bold mb-6  ">
              Welcome To
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#162F84] font-bold italic">
            <i className="fa-solid fa-clipboard-list "></i> Note App
            </p>
          </div>
          <div className="">
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
    </>
  )
}
