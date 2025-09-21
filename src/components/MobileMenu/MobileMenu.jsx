const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen p-4 z-50  bg-[#201f20] md:bg-transparent">
      <div className="flex justify-between items-center md:hidden w-[320px] mx-auto">
        <div className="flex items-center gap-[7px] rounded-[108px] px-[3px] py-[8px] pl-[11px] w-[132px] h-[44px] bg-[#efeff2] mb-[6px]">
          <button>
            <img
              srcSet="./img/Group-big-1x.png 1x, ./img/Group-big-2x.png 2x"
              src="./img/Group-big-1x.png"
              alt="land"
              width="26"
              height="26"
            />
          </button>
          <a
            className="font-light text-[16px] text-[#333]/95 cursor-pointer flex items-center"
            style={{
              background: "rgba(236, 236, 240, 0.3)",
              borderRadius: "108px",
              padding: "8px 3px 8px 7px",
              width: "132px",
              height: "44px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Backyard
          </a>
        </div>
        <button
          className="w-[40px] h-[40px] rounded-[11px] border border-[rgba(222,222,227,0.45)] flex items-center justify-center bg-[#e8e9ed] cursor-pointer hover:border-[#303030] "
          onClick={closeMenu}
        >
          <img srcSet="./img/close.svg" width="13" height="13" alt="close" />
        </button>
      </div>
      <div className="w-full max-w-[320px] mx-auto relative items-center">
        <ul
          className="flex flex-col gap-[4px] mt-4 md:hidden absolute right-0"
          style={{
            border: "1px solid #e4e4e9",
            borderRadius: "19px",
            padding: "13px 0px 15px 16px",
            width: "176px",
            height: "202px",
            backdropFilter: "blur(9.3px)",
            background: "#e8e9ed",
          }}
        >
          {[
            "Home",
            "About",
            "How it works",
            "Token design",
            "YARD flywheel",
          ].map((item, index) => (
            <li
              key={item}
              className="flex items-center justify-start rounded-full px-4 h-[38px] text-[13px] font-medium text-left hover:bg-[#303030] hover:text-[#fbfbfc]"
              style={{ color: index === 0 ? "#303030" : "#7a7a7a" }}
            >
              {item}
            </li>
          ))}
          <li
            key="Connect"
            style={{
              background: "#303030",
              border: "1px solid #ebebed",
              borderRadius: "100px",
              padding: "3px",
              width: "148px",
              height: "40px",
              fontFamily: "var(--second-family)",
              fontWeight: 500,
              fontSize: "13px",
              textAlign: "center",
              color: "#e8e9ed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Connect
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
