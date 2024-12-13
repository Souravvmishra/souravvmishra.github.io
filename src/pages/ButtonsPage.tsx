import { Card, CardContent } from '@/components/ui/card';
import { staggerWords } from '@/components/utility';
import { motion } from 'framer-motion';
import AllButtons from '@/components/showcase/Buttons';

const Showcase = () => {
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
        <main className="flex flex-col items-center justify-center min-h-screen bg-background px-4 md:px-8">
            <motion.section
                className="flex flex-col items-center mt-12 md:mt-16 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="mt-4 md:mt-6 text-2xl font-semibold text-foreground italic"
                >
                    {staggerWords('Showcasing Buttons with Style!')}
                </motion.h1>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-8 md:mt-12 w-full max-w-6xl"
                    variants={containerVariants}
                >
                    {AllButtons.map((IndexButton, i) => (
                        <motion.div key={i} variants={itemVariants} className="flex">
                            <Card className="p-6 shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 w-full max-w-[fit-content]">
                                <CardContent className="p-4">
                                    <div className="flex justify-center items-center">
                                        <IndexButton />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </main>
    );
};

export default Showcase;
