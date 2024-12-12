import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Users, GitFork, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState, useEffect } from 'react'

interface GithubPreview {
  avatar: string;
  followers: number;
  repos: number;
  bio: string;
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  preview: React.ReactNode;
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

export const GithubButton = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [githubData, setGithubData] = useState<GithubPreview | null>(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.github.com/users/souravvmishra')
      .then(res => res.json())
      .then(data => {
        setGithubData({
          avatar: data.avatar_url,
          followers: data.followers,
          repos: data.public_repos,
          bio: data.bio
        })
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [])

  const preview = isLoading ? (
    <motion.div 
      className="flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Loader2 className="h-4 w-4 animate-spin" />
    </motion.div>
  ) : githubData && (
    <motion.div 
      className="flex flex-col gap-2 p-3 w-64 bg-background text-foreground"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div className="flex items-center gap-3">
        <motion.img 
          src={githubData.avatar} 
          alt="GitHub Profile"
          className="w-12 h-12 rounded-full"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div>
          <motion.p className="font-medium flex items-center gap-2">
            Sourav Mishra
            <Github className="h-4 w-4" />
          </motion.p>
          <motion.p className="text-xs text-muted-foreground truncate max-w-[180px]">
            {githubData.bio}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="flex justify-between text-sm mt-2">
        <motion.span className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {githubData.followers} followers
        </motion.span>
        <motion.span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          {githubData.repos} repos
        </motion.span>
      </motion.div>
    </motion.div>
  )

  return <SocialButton 
    icon={<Github className="h-3 w-3" />}
    href="https://github.com/souravvmishra"
    label="GitHub"
    preview={preview}
  />
}

export const LinkedInButton = () => (
  <SocialButton
    icon={<Linkedin className="h-3 w-3" />}
    href="https://linkedin.com/in/souravvmishra"
    label="LinkedIn" 
    preview={<p>Connect with me on LinkedIn</p>}
  />
)

export const TwitterButton = () => (
  <SocialButton
    icon={<Twitter className="h-3 w-3" />}
    href="https://x.com/souravvmishra"
    label="X"
    preview={<p>Connect with me on X</p>}
  />
)

const SocialButton = ({ href, icon, label, preview }: SocialButtonProps) => (
  <motion.div variants={submitButtonVariants}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline" 
          size="icon"
          className="flex-shrink-0 bg-background hover:bg-accent text-foreground"
          asChild
        >
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent 
        className="bg-popover text-popover-foreground border border-foreground"
        sideOffset={5}
      >
        {preview}
      </TooltipContent>
    </Tooltip>
  </motion.div>
)

const SocialButtons = () => (
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
    <TooltipProvider delayDuration={300}>
      <GithubButton />
      <LinkedInButton />
      <TwitterButton />
    </TooltipProvider>
  </motion.div>
)

export default SocialButtons
