import Image from "next/image";
import FeaturedPosts from "./featured-posts";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/pf.jpg"
          // fill='intrusive'
          alt="Profile Pic"
          width={500}
          height={500}
        />
      </div>
      <h1>Hello, I'm Ash</h1>
      <p>
        I am a JavaScript Developer currently working with frontend frameworks
        like ReactJs or AngularJs.
      </p>
    <FeaturedPosts></FeaturedPosts>
    </section>
  );
};
export default Hero;
