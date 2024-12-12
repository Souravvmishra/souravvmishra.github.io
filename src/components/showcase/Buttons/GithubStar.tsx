import { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const GithubStar = () => {
  const [starred, setStarred] = useState(false);
  const [count, setCount] = useState(69);

  const handleClick = () => {
    setStarred(!starred);
    setCount((prev) => (starred ? prev - 1 : prev + 1));
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex items-center space-x-2"
    >
      <motion.div
        className="flex items-center"
        animate={{ scale: starred ? 1.2 : 1, rotate: starred ? 75 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Star
          className={`w-4 h-4 ${starred ? 'fill-current text-yellow-500' : ''}`}
          fill={starred ? 'currentColor' : 'none'}
        />
      </motion.div>
      <span>Star</span>
      <Separator orientation="vertical" className="" />
      <motion.span
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {count}
      </motion.span>
    </Button>
  );
};

export default GithubStar;
