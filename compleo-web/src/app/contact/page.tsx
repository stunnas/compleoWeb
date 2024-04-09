import Header from "@/components/screens/header";
import { LampContainer } from "@/components/components/lamp";
import ContactForm from "@/components/screens/contact";

export default function Contact() {
  
  return (
    <>
      <Header/>
      
      <LampContainer>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <ContactForm/>
        </main>
      </LampContainer>
    </>
    
  );
}
