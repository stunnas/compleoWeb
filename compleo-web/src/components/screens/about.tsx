import { CollabTooltip } from "@/components/components/collabTooltip";
import { JSX, SVGProps } from "react";

export default function About() {
  
    const people = [
        {
          id: 1,
          name: "Chase Albritton",
          designation: "Software Engineer",
          image: "/images/chase-albritton.jpeg",
          link: "https://www.linkedin.com/in/calbritton/"
        },
        {
          id: 2,
          name: "Austin Rucker",
          designation: "UI/UX Designer",
          image: "/images/austin-rucker.jpeg",
          link: "https://www.linkedin.com/in/austin-rucker/"
        },
    ]

  

  return (
    <>
        <div className="flex flex-col space-y-24 w-full">
          <div className="flex flex-col space-y-12 shadow-custom-glow rounded-lg shadow mt-4 p-4 overflow bg-[url('/images/founders.gif')] bg-cover">
            <CollabTooltip items={people}/>
            <div className="flex flex-col bg-white justify-center items-center rounded-xl border-2 border-black">
              <div className="my-12 w-4/5">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Mission</h3>
                <p className="text-center text-gray-600 mt-4">We strive to create a seamless and intuitive platform that empowers teams to collaborate and innovate, breaking down barriers to communication and productivity.</p>
              </div>
              <div className="my-8">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  <div className="text-center">
                    <SmartphoneIcon className="text-blue-500 w-12 h-12 mx-auto" />
                    <h4 className="font-semibold mt-2">Innovation</h4>
                    <p className="text-sm text-gray-500">Pushing the boundaries of what's possible.</p>
                  </div>
                  <div className="text-center">
                    <GroupIcon className="text-blue-500 w-12 h-12 mx-auto" />
                    <h4 className="font-semibold mt-2">Teamwork</h4>
                    <p className="text-sm text-gray-500">Collaborating to achieve shared goals.</p>
                  </div>
                  <div className="text-center">
                    <AccessibilityIcon className="text-blue-500 w-12 h-12 mx-auto" />
                    <h4 className="font-semibold mt-2">Accessibility</h4>
                    <p className="text-sm text-gray-500">Ensuring all users can interact with our platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
    </>
    
  );
}


function AccessibilityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function GroupIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function SmartphoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}