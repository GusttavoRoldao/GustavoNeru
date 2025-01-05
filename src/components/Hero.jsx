const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#EDEFFF]">
      <div className="absolute inset-0 lg:flex lg:w-1/2 lg:h-full">
        <img
          src="/images/bg.png"
          alt="Gustavo Neru"
          className="w-full h-full object-cover lg:w-auto lg:h-auto lg:scale-100"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 lg:bg-opacity-0 lg:blur-none blur-sm"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8  lg:ml-[650px]">
        <div className="relative">
          <h1 className="text-white text-5xl lg:text-6xl font-Aspire lg:text-black">
            GUSTAVO
          </h1>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#E3761D] text-3xl lg:text-3xl lg:mt-3 font-Aspire tracking-wide">
            NERU
          </span>
        </div>
        <p className="text-white text-xl lg:text-2xl mt-4 font-Asgard lg:text-black">
          Designer • Desenvolvedor
        </p>
      </div>
    </div>
  );
};

export default Hero;
