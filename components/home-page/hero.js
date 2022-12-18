import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/leia.jpg"
                    alt="Leia"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I&apos;m Leia</h1>
            <p>Greatest Woman In The Galaxy</p>
        </section>
    )
}
export default Hero;
