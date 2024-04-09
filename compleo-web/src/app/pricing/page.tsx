import Header from "@/components/screens/header";
import Prices from "@/components/screens/pricing";
import { LampContainer } from "@/components/components/lamp";

export default function Pricing() {
  
  return (
    <>
      <Header/>
      
      <LampContainer>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Prices/>
        </main>
      </LampContainer>
    </>
    
  );
}
