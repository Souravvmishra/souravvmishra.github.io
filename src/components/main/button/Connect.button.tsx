import { Button } from '@/components/ui/button'
import { staggerWords } from '@/components/utility'
import { Mail, X, Github, Linkedin, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setIsOpen(false)
    setEmail('')
  }

  const submitButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }

  const closeButtonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }

  const socialLinks = [
    {
      icon: <Github className="h-3 w-3" />,
      href: "https://github.com/souravvmishra",
      label: "GitHub",
      tooltip: "Follow me on GitHub"
    },
    {
      icon: <Linkedin className="h-3 w-3" />,
      href: "https://linkedin.com/in/souravvmishra",
      label: "LinkedIn",
      tooltip: "Connect with me on LinkedIn"
    },
    {
      icon: <Twitter className="h-3 w-3" />,
      href: "https://x.com/souravvmishra",
      label: "X",
      tooltip: "Follow me on X (Twitter)"
    }
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto px-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex flex-col items-center gap-3"
          >
            <Button
              variant="default"
              onClick={() => setIsOpen(true)}
              className="mt-4 md:mt-6 w-full sm:w-auto"
              aria-label="Open contact form"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-3 w-3" aria-hidden="true" />
                {staggerWords("Connect with me")}
              </span>
            </Button>
            <motion.div 
              className="flex gap-2"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <TooltipProvider>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={submitButtonVariants}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                          asChild
                        >
                          <a 
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            {social.icon}
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </TooltipProvider>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-6"
            aria-label="Contact form"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex-grow"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-muted-foreground"
                autoFocus
                aria-label="Email input"
              />
            </motion.div>
            <motion.div 
              className="flex gap-2 justify-end sm:justify-start"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={submitButtonVariants}>
                <Button type="submit" variant="default" className="flex-shrink-0" aria-label="Submit email">
                  <Mail className="h-3 w-3" aria-hidden="true" />
                </Button>
              </motion.div>
              <motion.div variants={closeButtonVariants}>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false)
                    setEmail('')
                  }}
                  className="flex-shrink-0"
                  aria-label="Close form"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ConnectButton
