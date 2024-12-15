import { Briefcase, FileText, Menu, X, User, ExternalLink, FileUser } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 1
            }
        }
    }

    const mobileMenuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "beforeChildren"
            }
        }
    }

    const mobileItemVariants = {
        closed: {
            opacity: 0,
            x: 20
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 w-full z-40 "
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
        >
            <div className="relative flex justify-between items-center max-w-7xl px-4 md:px-6 py-3 md:py-4 mx-auto bg-background/80 backdrop-blur-sm border-b border-border font-sans text-sm font-medium">
                <motion.div variants={itemVariants}>
                    <Link
                        to={'/'}
                        className="flex text-sm items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Sourav Mishra"
                    >
                        <User className="w-4 h-4" />
                        <span className="hidden sm:inline">souravvmishra</span>
                    </Link>
                </motion.div>

                <nav className="hidden md:block">
                    <motion.ul
                        className="text-sm flex items-center gap-8 text-muted-foreground"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li variants={itemVariants}>
                            <Link to="/showcase/buttons" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                <Briefcase className="w-3 h-3" />
                                <span>Works</span>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <Link to="/error" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                <FileText className="w-3 h-3" />
                                <span>Check This</span>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <a
                                href="/souravvmishra_developer.pdf"
                                download="souravvmishra_developer"
                                className="flex items-center gap-2 hover:text-foreground transition-colors"
                            >
                                <FileUser className="w-3 h-3" />
                                <span>Resume</span>
                            </a>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <a href="https://meetman.codestam.com" target="_blank" className="flex items-center gap-3 hover:text-foreground transition-colors" onClick={toggleMenu}>
                                <ExternalLink className="h-3 w-3" />
                                <span>Meetman</span>
                            </a>
                        </motion.li>
                    </motion.ul>
                </nav>

                <button
                    className="md:hidden text-muted-foreground hover:text-foreground transition-colors z-50 relative"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            <motion.nav
                aria-label="Main navigation"
                className="fixed top-[52px] right-0 bottom-0 w-full md:hidden bg-background z-30"
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={mobileMenuVariants}
            >
                <motion.ul
                    className="h-full flex flex-col items-center justify-center gap-8 text-lg text-muted-foreground"
                >
                    <motion.li variants={mobileItemVariants}>
                        <Link to="/showcase/buttons" className="flex items-center gap-3 hover:text-foreground transition-colors" onClick={toggleMenu}>
                            <Briefcase className="h-5 w-5" />
                            <span>Works</span>
                        </Link>
                    </motion.li>
                    <motion.li variants={mobileItemVariants}>
                        <Link to="/error" className="flex items-center gap-3 hover:text-foreground transition-colors" onClick={toggleMenu}>
                            <FileText className="h-5 w-5" />
                            <span>Check This</span>
                        </Link>
                    </motion.li>
                    <motion.li variants={mobileItemVariants}>
                        <a
                            href="/souravvmishra_developer.pdf"
                            download="souravvmishra_developer"
                            className="flex items-center gap-2 hover:text-foreground transition-colors"
                        >
                            <FileUser className="h-5 w-5" />
                            <span>Resume</span>
                        </a>

                    </motion.li>
                    <motion.li variants={mobileItemVariants}>
                        <a href="https://meetman.codestam.com" target="_blank" className="flex items-center gap-3 hover:text-foreground transition-colors" onClick={toggleMenu}>
                            <ExternalLink className="h-5 w-5" />
                            <span>Meetman</span>
                        </a>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        </motion.header>
    )
}

export default Navbar
