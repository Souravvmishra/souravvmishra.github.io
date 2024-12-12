import './App.css'
import AnimatedCursor from "react-animated-cursor"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Page404 from './pages/Page404';
import { ModeToggle } from './components/ui/mode-toggle';
import { motion } from 'framer-motion';
import Navbar from './components/main/Navbar';
import Showcase from './pages/ButtonsPage';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <div className='crimson-text-bold'>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/error" element={<Page404 />} />
            <Route path="/showcase/buttons" element={<Showcase />} />
          </Routes>


          <AnimatedCursor
            color="255,255,255,0.5"
            innerSize={8}
            outerSize={40}
            innerScale={1}
            outerScale={1.5}
            outerAlpha={0.1}
            innerStyle={{
              backgroundColor: "hsl(var(--primary))"
            }}
            outerStyle={{
              border: "2px solid hsl(var(--primary))",
            }}
            clickables={[
              'a',
              'button',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              '.link'
            ]}
          />
        </div>
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <ModeToggle />
        </motion.div>
      </ThemeProvider>
    </Router>
  )
}

export default App
