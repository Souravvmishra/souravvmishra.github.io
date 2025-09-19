import { motion } from 'framer-motion';
import { staggerWords } from '../utility';
import ConnectButton from './button/Connect.button';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.5,
            },
        },
    };

    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen bg-background"
            role="main"
            aria-label="Codestam Technologies - Best Software Company in Ranchi"
        >
            {/* SEO / Accessibility Hidden Content */}
            <section
                className="sr-only"
                aria-label="Codestam Technologies - Software Company Ranchi Jharkhand"
            >
                <h1>Codestam Technologies - Best Software Company in Ranchi</h1>
                <p>
                    Codestam Technologies, co-founded by Sourav Mishra (CTO), is the best software
                    company in Ranchi, Jharkhand. We build websites, mobile apps, and AI-powered
                    solutions for startups and businesses across India.
                </p>
                <p>
                    As a top IT company in Ranchi, Codestam Technologies focuses on web design, app
                    development, UI/UX, and automation services that help businesses grow online with
                    modern digital products.
                </p>
                <p>
                    We are known for delivering high-quality software solutions that are easy to use,
                    scalable, and built with the latest technologies.
                </p>
                <a
                    href="https://codestam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Codestam Technologies Official Website"
                >
                    Visit Codestam Technologies
                </a>
            </section>

            <motion.section
                className="flex flex-col items-center mt-24 md:mt-16 text-center px-4 md:px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    variants={itemVariants}
                    src="https://avatars.githubusercontent.com/u/89072785?v=4"
                    alt="Sourav Mishra, Co Founder and CTO at Codestam Technologies, Ranchi"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full"
                    width="96"
                    height="96"
                />
                <motion.h1
                    variants={itemVariants}
                    className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-foreground italic"
                >
                    {staggerWords("Hi, I'm Sourav Mishra")} <span aria-hidden="true">⚡</span>
                </motion.h1>
                <motion.h2
                    variants={itemVariants}
                    className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground"
                >
                    {staggerWords("Building digital")}<br />
                    <span className="underline decoration-primary">
                        {staggerWords("products, brands, and")}
                    </span>
                    <br />
                    {staggerWords("experience.")}
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-lg px-4"
                >
                    {staggerWords(
                        "We are Codestam Technologies, a software company based in Ranchi, India. As Co Founder and CTO, Sourav Mishra leads our team in designing websites, apps, and user-friendly digital products that help businesses grow online."
                    )}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <ConnectButton />
                </motion.div>
            </motion.section>
        </main>
    );
};

export default Hero;
