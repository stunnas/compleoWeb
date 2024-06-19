import Hero from "@/components/screens/hero";
import Header from "@/components/screens/header";
import About from "@/components/screens/about";
import { LampContainer } from "@/components/components/lamp";
export default function Home() {

  

  return (
    <>
      <Header/>
      <LampContainer>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Hero/>
          <About/>
        </main>
      </LampContainer>
      
    </>
    
  );
}
