import Image from "next/image";
import classes from "./hero.module.css";
import pf from "../../public/images/site/pf.jpg"

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}></div>
      <Image src={pf} alt="Profile Pic" width={300} height={300} />
      <h1>Hello TechDev</h1>
      <p>I am a React Developer.</p>
    </section>
  );
};
export default Hero;
