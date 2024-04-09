import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function ContactForm() {
    return (
      <div className="grid gap-12 border-2 border-white shadow-custom-glow rounded-xl mt-8 p-4 lg:grid-cols-2 xl:gap-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl text-white font-bold">Contact Us</h1>
            <p className="text-white/80">
              We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4 flex flex-col">
            <form className="space-y-4">
                {/* Name Field */}
                <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-white">Name</label>
                <input id="name" placeholder="Enter your name" type="text" className="w-full px-4 py-2 rounded-md" autoComplete="name" />
                </div>
                
                {/* Email Field */}
                <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-white">Email</label>
                <input id="email" placeholder="Enter your email" type="email" className="w-full px-4 py-2 rounded-md" autoComplete="email" />
                </div>
                
                {/* Subject Field */}
                <div className="flex flex-col">
                <label htmlFor="subject" className="mb-2 text-white">Subject</label>
                <input id="subject" placeholder="Enter the subject" type="text" className="w-full px-4 py-2 rounded-md" />
                </div>
                
                {/* Message Field */}
                <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-white">Message</label>
                <textarea id="message" placeholder="Enter your message" className="w-full px-4 py-2 rounded-md min-h-[100px]" />
                </div>
                
                <button className="bg-white rounded-full p-4 w-full">Send message</button>
            </form>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl text-white font-bold">Contact Details</h3>
              <p className="text-white/80">Reach out to us using the information below.</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <PhoneIcon className="w-4 h-4 flex-shrink-0"/>
                <div className="text-sm">+1 (123) 456-7890</div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <Link className="text-sm underline underline-offset-2" href="mailto:chaseaalbritton@gmail.com">help@compleo.com</Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <MapIcon className="w-4 h-4 flex-shrink-0" />
                <div className="text-sm text-white">123 Street Name, City, Country, 12345</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 mt-16">
              <h3 className="text-2xl text-white font-bold">Follow us on Social Media</h3>
              <p className="text-white/80">Stay updated with our latest news and announcements.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Link className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-white hover:underline underline-offset-4" href="#">
                <TwitterIcon className="w-4 h-4 flex-shrink-0" />
                <span>Twitter</span>
              </Link>
              <Link className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-white hover:underline underline-offset-4" href="#">
                <FacebookIcon className="w-4 h-4 flex-shrink-0" />
                <span>Facebook</span>
              </Link>
              <Link className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-white hover:underline underline-offset-4" href="#">
                <InstagramIcon className="w-4 h-4 flex-shrink-0" />
                <span>Instagram</span>
              </Link>
              <Link className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-white hover:underline underline-offset-4" href="#">
                <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
  
function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
} 
function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}
function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
        </svg>
    )
}
function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}
function MapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" x2="9" y1="3" y2="18" />
        <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    )
}
function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}
function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
  