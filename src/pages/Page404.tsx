import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingEmojis = () => {
  const floatingEmojis = Array.from(
    { length: 0x1FAFF - 0x1F300 + 1 },
    (_, i) => String.fromCodePoint(i + 0x1F300)
  ).filter(e => /\p{Emoji}/u.test(e));

  // Limit the number of floating emojis to 10
  const randomEmojis = floatingEmojis.sort(() => 0.5 - Math.random()).slice(0, 10);

  const generateRandomStyle = () => {
    const left = Math.random() * 100; // Random horizontal position
    const duration = 4 + Math.random() * 4; // Random float duration
    const size = 1 + Math.random(); // Random emoji size
    return {
      left: `${left}%`,
      fontSize: `${size}rem`,
      animationDuration: `${duration}s`,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {randomEmojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute -z-0 bottom-0 text-3xl"
          style={generateRandomStyle()}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0], // Fade in and fade out
            y: ['100%', '-1000%'] // Move from bottom to top
          }}
          transition={{
            duration: parseFloat(generateRandomStyle().animationDuration), // Random duration
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          aria-label='Floating Emoji by Sourav Mishra'
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.section
        className="flex flex-col items-center mt-24 md:mt-16 text-center px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl font-extrabold text-foreground"
        >
          Got Lost?
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-base text-muted-foreground"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <Link to={'/'} className={buttonVariants({ variant: 'default' })}>
            Take Me Home <ExternalLink />
          </Link>
        </motion.div>
      </motion.section>

      {/* Floating Emojis */}
      <FloatingEmojis />
    </main>
  );
};

export default NotFoundPage;
