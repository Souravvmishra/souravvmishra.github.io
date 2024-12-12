import { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';

const FacebookLike = () => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(69);

    const handleClick = () => {
        setLiked(!liked);
        setCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <Button
            onClick={handleClick}
            variant="outline"
            className="flex items-center space-x-2"
        >
            <motion.div
                className="flex items-center"
                animate={{
                    x: liked ? [-10, 0] : [0],
                    y: liked ? [-10, 0] : [0],
                    rotate: liked ? [-50, 0] : 0,
                    scale: liked ? [1.5, 1] : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    duration: 0.6,
                }}
            >
                <ThumbsUp
                    className={`w-4 h-4 ${liked ? 'fill-current text-blue-500' : ''}`}
                    fill={liked ? 'currentColor' : 'none'}
                />
            </motion.div>
            <span>Like</span>
            <Separator orientation="vertical" className="" />
            <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {count}
            </motion.span>
        </Button>
    );
};

export default FacebookLike;
