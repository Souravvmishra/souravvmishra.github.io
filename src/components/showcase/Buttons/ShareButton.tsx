import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Facebook, LucideTwitter } from "lucide-react";

const ConnectButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttons = [
        { icon: <Mail className="w-fit" />, label: "Email" },
        { icon: <Facebook className="w-fit" />, label: "Facebook" },
        { icon: <LucideTwitter className="w-fit" />, label: "Facebook" },

    ];

    const childVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 0 },
        visible: (index: number) => ({
            opacity: 1,
            scale: 1,
            x: 60 * index, // Horizontal spacing
            transition: { type: "spring", stiffness: 300, damping: 20 },
        }),
        exit: { opacity: 0, scaleX: 0.2, x: 0 },
    };

    return (
        <div className="w-64">

            <AnimatePresence mode="wait" >
                <div
                    className="relative flex items-center justify-center "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Smaller Buttons */}
                    {isHovered ?
                        <div className="flex items-center w-full ">
                            {buttons.map((btn, index) => (
                                <motion.div
                                    key={btn.label}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={childVariants}
                                    aria-label={btn.label}
                                    className="tracking-tighter"
                                >
                                    <Button size={'icon'} variant={'outline'} >
                                        {btn.icon}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                        :
                        <AnimatePresence mode="wait"> 
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.5 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 1, scaleX: 0.5 }}
                                className="relative z-10 w-full "
                            >
                                <Button className="px-6 py-3 w-full" aria-label="Connect">
                                    Connect
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    }
                </div>
            </AnimatePresence>
        </div>
    );
};

export default ConnectButton;
