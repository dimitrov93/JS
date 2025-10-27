import classes from "./hero.module.css";
import Image from "next/image";
const HeroPage = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An Image showing Tsvetomir"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Tsvetomir</h1>
      <p>I looking to become front-end/full stack developer</p>
    </section>
  );
};

export default HeroPage;
