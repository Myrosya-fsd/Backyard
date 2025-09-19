import Container from "../Container/Container.jsx";
import styles from "./WhatIsBackyard.module.css";

const WhatIsBackyard = () => {
  return (
    <section className={styles.whatIs}>
      <Container>
        <h2 className={styles.title}>What is Backyard?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img
              className={styles.photo}
              srcSet="./img/land-desk-1x.png 1x, ./img/land-desk-2x.png 2x"
              src="./img/land-desk-1x.png"
              alt="land"
              width="179"
              height="179"
            />
            <div className={styles.topBlock}>
              <p className={styles.number}>1</p>
              <h3 className={styles.subtitle}>Yield Aggregator</h3>
            </div>
            <div className={styles.bottomBlock}>
              <h4 className={styles.subtitleBotton}>
                One-click yield aggregation
              </h4>
              <p className={styles.text}>
                Choose multiple stablecoin strategies, diversify in seconds, and
                optimize your yield without complexity
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.photo}
              srcSet="./img/plant-1x.png 1x, ./img/plant-2x.png 2x"
              src="./img/plant-1x.png"
              alt="plant"
              width="179"
              height="179"
            />
            <div className={styles.topBlock}>
              <p className={styles.number}>2</p>
              <h3 className={styles.subtitle}>Yield-backed Stablecoin </h3>
            </div>
            <div className={styles.bottomBlock}>
              <h4 className={styles.subtitleBotton}>
                Unlock liquidity with BYD
              </h4>
              <p className={styles.text}>
                Mint BYD against your yield-generating LP tokens to stay liquid
                and productive at the same time
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.photo}
              srcSet="./img/Coins-1x.png 1x, ./img/Coins-2x.png 2x"
              src="./img/Coins-1x.png"
              alt="coins"
              width="179"
              height="179"
            />
            <div className={styles.topBlock}>
              <p className={styles.number}>3</p>
              <h3 className={styles.subtitle}>Boost DeFi Liquidity</h3>
            </div>
            <div className={styles.bottomBlock}>
              <h4 className={styles.subtitleBotton}>
                Boost protocols, earn more
              </h4>
              <p className={styles.text}>
                Your liquidity empowers DeFi — vote for pools, earn bribes, and
                maximize your rewards.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default WhatIsBackyard;
