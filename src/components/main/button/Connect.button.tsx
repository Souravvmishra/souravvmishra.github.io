import { Button } from '@/components/ui/button'
import { staggerWords } from '@/components/utility'
import { Mail, X, Loader2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { sendEmail } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import SocialButtons from '@/components/main/socials'

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError('Email is required')
      return false
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) return
    
    setIsLoading(true)
    try {
      await sendEmail(
        "New Contact Request", 
        `New contact request from email: ${email}`
      )
      setIsOpen(false)
      setEmail('')
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      })
    } catch (error) {
      console.error('Failed to send email:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
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
            <SocialButtons />
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
            <div className="flex-grow relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) validateEmail(e.target.value)
                  }}
                  className={`w-full ${emailError ? 'border-red-500 focus:ring-red-500' : ''}`}
                  autoFocus
                  aria-label="Email input"
                  disabled={isLoading}
                  onBlur={() => validateEmail(email)}
                />
                <AnimatePresence>
                  {emailError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500 text-sm"
                    >
                      <AlertCircle className="h-3 w-3" />
                      <small className='font-medium'>{emailError}</small>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
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
                <Button 
                  type="submit" 
                  variant="default" 
                  className="flex-shrink-0" 
                  aria-label="Submit email"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Mail className="h-3 w-3" aria-hidden="true" />
                  )}
                </Button>
              </motion.div>
              <motion.div variants={closeButtonVariants}>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false)
                    setEmail('')
                    setEmailError('')
                  }}
                  className="flex-shrink-0"
                  aria-label="Close form"
                  disabled={isLoading}
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
