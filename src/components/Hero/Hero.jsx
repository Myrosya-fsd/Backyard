import Container from "../Container/Container.jsx";
import clsx from "clsx";

const Hero = () => {
  return (
    <section
      className="pt-[210px] relative z-[1] bg-cover bg-no-repeat bg-[center_-130px]
          pb-[67px] md:pb-[119px] xl:pb-[148px] 2xl:pb-[131px]"
      style={{
        backgroundImage:
          "image-set(url(/img/backing-1x.png) 1x, url(/img/backing-2x.png) 2x)",
      }}
    >
      <Container>
        <div className="relative mb-[14px] sm:mb-[16px] md:mb-[16px] 2xl:mb-[16px]">
          <div className="flex items-start">
            <h1
              className={clsx(
                "font-semibold text-[#303030] text-left flex-1",
                "text-[58px] leading-[110%] w-[316px] ",
                "md:text-[72px]",
                "2xl:text-[90px]"
              )}
              style={{ fontFamily: "var(--font-family)" }}
            >
              The yield-backed stablecoin protocol boosting DeFi liquidity
            </h1>

            <picture className="hidden md:block ml-auto shrink-0">
              <source
                srcSet="/img/hero-big-1x.png 1x, /img/hero-big-2x.png 2x"
                media="(min-width:1440px)"
              />
              <source
                srcSet="/img/hero-desk-1x.png 1x, /img/hero-desk-2x.png 2x"
                media="(min-width:1280px)"
              />
              <source
                srcSet="/img/hero-tab-1x.png 1x, /img/hero-tab-2x.png 2x"
                media="(min-width:768px)"
              />
              <img
                src="/img/hero-desk-1x.png"
                srcSet="/img/hero-desk-1x.png 1x, /img/hero-desk-2x.png 2x"
                alt="plant"
                className="w-[212px] h-[212px] 2xl:w-[276px] 2xl:h-[276px] object-contain"
              />
            </picture>
          </div>
          <picture
            className={clsx(
              "absolute z-[20] pointer-events-none",
              "max-[767px]:top-[330px] max-[767px]:left-[147px]",
              "max-[767px]:w-[60px] max-[767px]:h-[60px]",
              "md:hidden"
            )}
          >
            <source
              srcSet="/img/hero-mob-1x.png 1x, /img/hero-mob-2x.png 2x"
              media="(max-width:767px)"
            />
            <img
              src="/img/hero-mob-1x.png"
              srcSet="/img/hero-mob-1x.png 1x, /img/hero-mob-2x.png 2x"
              alt="plant"
              className="object-contain w-full h-full"
            />
          </picture>
        </div>

        <div
          className={clsx(
            "mb-[38px]",
            "sm:mb-[33px]",
            "md:mb-[70px]",
            "2xl:mb-[82.5px]"
          )}
        >
          <p
            className={clsx(
              "font-normal text-[20px] leading-normal text-left text-[#262626]/55 mb-[38px]",
              "sm:text-[16px] ",
              "md:text-[20px] ",
              "2xl:text-[24px] "
            )}
            style={{ fontFamily: "var(--font3)", fontWeight: 400 }}
          >
            Keep your yield working for you — we keep your liquidity accessible
          </p>
        </div>

        <div className="flex gap-[21px]">
          <button className="rounded-[38px] py-[16px] w-[164px] h-[57px] bg-[#2d2d2d] text-[#f7f7f7] font-semibold text-[16px] hover:bg-[#3b3b3b] hover:text-[#d1d1d2] active:bg-[#2d2d2d] active:text-[#595959] md:w-[329px]">
            Join Whitelist
          </button>

          <button className="hidden md:block rounded-[38px] px-[32px] py-[16px] w-[208px] h-[57px] bg-[#e6e8ec] text-[#2e2e2e] font-semibold text-[16px] hover:bg-[#f8fbff] hover:text-[#2e2e2e]/75 active:bg-[#abacaf] active:text-[#2e2e2e]">
            Read Docs
          </button>

          <button className="flex items-center justify-center gap-2 rounded-[38px] py-[16px] w-[144px] h-[57px] bg-[#e6e8ec] text-[#2e2e2e] font-semibold text-[16px] hover:bg-[#f8fbff] hover:text-[#2e2e2e]/75 active:bg-[#abacaf] active:text-[#2e2e2e] block md:hidden">
            Learn more
            <img src="./img/arrow.svg" alt="arrow" width="12" height="12" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
