import clsx from "clsx";
const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "mx-auto",
        "w-[360px] px-[22px]",
        "md:w-[768px] md:px-[32px] md:pr-[40px]",
        "xl:w-[1280px] xl:px-[84px]",
        "2xl:max-w-[1920px] 2xl:w-full 2xl:px-[275px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
