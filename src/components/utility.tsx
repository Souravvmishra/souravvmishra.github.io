import { motion } from 'framer-motion'

export const staggerWords = (text: string) => {
    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.05
                    }
                }
            }}
            className="inline-flex flex-wrap justify-center"
        >
            {text.split(' ').map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] whitespace-pre"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}
