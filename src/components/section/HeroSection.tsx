import investment from "../../assets/investment.png";

export const HeroSection = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-5 sm:py-16 py-6`}>
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            From <span className="text-green-400">
              Community</span>
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px]  ss:leading-[100.8px] leading-[75px] w-full">
          To <span className="text-green-400">Community</span>
        </h1>
        <p
          className={`font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          Join our Web3 crowdfunding platform to support projects benefiting
          everyone. Together, let's build a brighter future.
        </p>
      </div>

      <div
        className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}
      >
        <img
          src={investment}
          alt="investment"
          className="size-96 relative z-[5]"
        />
      </div>
    </section>
  );
};
