import Container from "../Container/Container.jsx";
import clsx from "clsx";

const data = [
  {
    id: 1,
    img: "./img/land-desk-1x.png",
    img2x: "./img/land-desck-2x.png",
    title: "Yield Aggregator",
    headline: "One-click yield aggregation",
    text: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
  },
  {
    id: 2,
    img: "./img/plant-1x.png",
    img2x: "./img/plant-2x.png",
    title: "Yield-backed Stablecoin",
    headline: "Unlock liquidity with BYD",
    text: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
  },
  {
    id: 3,
    img: "./img/Coins-1x.png",
    img2x: "./img/Coins-2x.png",
    title: "Boost DeFi Liquidity",
    headline: "Boost protocols, earn more",
    text: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
  },
];

export default function WhatIsBackyard() {
  return (
    <section className="mb-[131px]">
      <Container>
        <div
          className={clsx(
            "mb-[39px]",
            " md:mb-[36px]",
            "xl:mb-[77px]",
            "2xl:mb-[77px]"
          )}
        >
          <h2
            className={clsx(
              "font-[var(--font-family)] font-bold leading-[110%] text-[#303030]",
              "text-[28px]",
              "md:text-[42px]",
              "xl:text-[42px] ",
              "2xl:text-[48px] "
            )}
          >
            What is Backyard?
          </h2>
        </div>
        <ul className="w-full flex flex-col md:flex-row md:justify-between md:gap-[78px] gap-8">
          {data.map((it) => (
            <li key={it.id} className="flex flex-col items-center">
              <img
                className="block w-[179px] h-[179px] object-contain"
                srcSet={`${it.img} 1x, ${it.img2x} 2x`}
                src={it.img}
                alt={it.title}
                width="179"
                height="179"
              />
              <div className="-mt-[36px] mb-[15px] w-[330px] h-[57px] rounded-[45px] backdrop-blur-[4px] bg-[#f4f6f7] flex items-center gap-[12px] pl-[12px] pt-[13px] pb-[13px]">
                <div className="w-[33px] h-[33px] bg-[#303030] rounded-full flex items-center justify-center font-semibold text-[15px] leading-[140%] tracking-[0.02em] text-[#fbfbfc]">
                  {it.id}
                </div>
                <h3 className="text-[20px] font-normal text-[#303030]">
                  {it.title}
                </h3>
              </div>

              <div className="w-[330px] rounded-[31px] px-[29px] py-[30px] backdrop-blur-[4px] bg-[#f4f6f7] text-left">
                <div className={clsx("mb-[11px]", "  2xl:mb-[11px]")}>
                  <h4
                    className={clsx(
                      "font-extrabold text-[#2d322f]",
                      "text-[18px] ",
                      "2xl:text-[20px]"
                    )}
                  >
                    {it.headline}
                  </h4>
                </div>
                <p
                  className={clsx(
                    "font-normal text-[#787878]",
                    "text-[14px]",
                    "2xl:text-[16px]"
                  )}
                >
                  {it.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
