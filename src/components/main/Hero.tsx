"use client"

import { Button } from "@/components/ui/button"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"

const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate([
      [".word", { opacity: 0, y: 20 }, { duration: 0 }],
      [".word", { opacity: 1, y: 0 }, { duration: 0.5, delay: stagger(0.1) }],
      [".buttons", { opacity: 0 }, { duration: 0 }],
      [".buttons", { opacity: 1 }, { duration: 0.5, delay: 0.5 }]
    ])
  }, [animate])

  const stagger = (staggerTime = 0.1) => (i: number) => i * staggerTime

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div 
        ref={scope}
        className="relative text-center space-y-8 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block">
            <span className="word inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Hi,</span>{" "}
            <span className="word inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">I'm</span>
          </span>
          <span className="block">
            <span className="word inline-block text-primary">Sourav</span>{" "}
            <span className="word inline-block text-primary">Mishra</span>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
          <span className="word inline-block">A</span>{" "}
          <span className="word inline-block">passionate</span>{" "}
          <span className="word inline-block">full-stack</span>{" "}
          <span className="word inline-block">developer</span>{" "}
          <span className="word inline-block">crafting</span>{" "}
          <span className="word inline-block">beautiful</span>{" "}
          <span className="word inline-block">and</span>{" "}
          <span className="word inline-block">functional</span>{" "}
          <span className="word inline-block">web</span>{" "}
          <span className="word inline-block">experiences</span>
        </p>

        <div className="buttons flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20 transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/20 hover:border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
