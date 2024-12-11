import './App.css'
import Hero from '@/components/main/Hero'
import AnimatedCursor from "react-animated-cursor"
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='crimson-text-bold'>
        <Hero />
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
    </ThemeProvider>
  )
}

export default App
