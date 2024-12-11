"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block">Hi, I'm</span>
          <span className="block text-primary">Your Name</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            View My Work
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
