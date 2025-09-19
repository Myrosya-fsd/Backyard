import Container from "../Container/Container.jsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.topBlock}>
            <img
              className={styles.photo}
              srcSet="./img/Group-big-1x.png 1x, ./img/Group-big-2x.png 2x"
              src="./img/Group-big-1x.png"
              alt="land"
              width="26"
              height="26"
            />
            <a className={styles.logo}>Backyard</a>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>About</li>
            <li className={styles.item}>How it works </li>
            <li className={styles.item}>Token design</li>
            <li className={styles.item}>YARD flywheel</li>
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default Header;
