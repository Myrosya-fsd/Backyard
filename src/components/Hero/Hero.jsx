import Container from "../Container/Container.jsx";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.topBlock}>
          <h1 className={styles.title}>
            The yield-backed stablecoin protocol boosting DeFi liquidity
          </h1>
          <picture className={styles.img}>
            <source
              srcSet="
                        /img/hero-big-1x.png 1x,
                        /img/hero-big-2x.png 2x
                      "
              media="(min-width: 1440px)"
            />
            <source
              srcSet="
                        /img/hero-desk-1x.png 1x,
                        /img/hero-desk-2x.png 2x
                        "
              media="(min-width: 1280px)"
            />
            <source
              srcSet="
                        /img/hero-tab-1x.png 1x,
                        /img/hero-tab-2x.png 2x
                      "
              media="(min-width: 768px)"
            />
            <source
              srcSet="
                        /img/hero-mob-1x.png 1x,
                        /img/hero-mob-2x.png  2x
                      "
              media="(max-width: 767px)"
            />
            <img
              className={styles.img}
              src="/img/hero-desk-1x.png"
              alt="Yacht"
            />
          </picture>
        </div>
        <p className={styles.text}>
          Keep your yield working for you — we keep your liquidity accessible
        </p>
        <div className={styles.btnBlock}>
          <button className={styles.btnLeft}>Join Whitelist</button>
          <button className={styles.btnRight}>Read Docs</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
