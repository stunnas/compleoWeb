import Header from "@/components/screens/header";
import { LampContainer } from "@/components/components/lamp";
import { StickyScroll } from "@/components/components/stickyScroll";
import { JSX, SVGProps } from "react";

const content = [
  {
    title: "AI-Powered Tasklist Generation",
    description: "An intelligent algorithm that generates a functional tasklist for your day based on your preferences and priorities. Organized. Productive. Stress-free.",
    svg: <ListIcon className="w-32 h-32" />
  },
  {
    title: "Calendar Integration",
    description: "Seamlessly sync your app with your calendars, allowing you to view and manage your tasks alongside your scheduled events and appointments. Stay on top of your day without switching between multiple apps.",
    svg: <CalendarIcon className="w-32 h-32" />
  },
  {
    title: "Smart Task Prioritization",
    description: "The app's AI engine analyzes your tasks and assigns priority levels based on deadlines, importance, and urgency. Focus on the most critical tasks first and ensure that nothing falls through the cracks.",
    svg: <TrendingUpIcon className="w-32 h-32" />
  },
  {
    title: "Personalized Recommendations",
    description: "Receive personalized task recommendations based on your work patterns, past behavior, and preferences. The app learns from your interactions and suggests tasks that align with your goals and priorities.",
    svg: <AwardIcon className="w-32 h-32" />
  },
  {
    title: "Collaborative Task Management",
    description: "Share tasks and collaborate with colleagues, friends, or family members. Keep everyone in the loop, assign tasks, and track progress collectively. Boost teamwork and productivity.",
    svg: <UsersIcon className="w-32 h-32" />
  },
  {
    title: "Intelligent Reminders",
    description: "The app sends intelligent reminders based on your schedule, preferences, and task urgency. Stay on track and meet your goals.",
    svg: <BellIcon className="w-32 h-32" />
  },
  {
    title: "Insights and Analytics",
    description: "Gain valuable insights into your productivity patterns through detailed analytics and visualizations. Understand your work habits, identify areas for improvement, and optimize your workflow.",
    svg: <ActivityIcon className="w-32 h-32" />
  },
  {
    title: "Cross-Platform Availability",
    description: "Access your tasklist and manage your productivity from anywhere, on any device. The app is available on web, mobile, and desktop platforms for a seamless user experience.",
    svg: <SmartphoneIcon className="w-32 h-32" />
  },
];

export default function Features() {
  
  return (
    <>
      <Header/>
      
      <LampContainer>
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
          <div className="py-2 md:mt-8 lg:mt-0 lg:py-2 xl:py-8 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">AI-Powered Productivity</h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Experience the future of productivity with our AI-powered app. From intelligent task management to
                    personalized recommendations, we've got you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StickyScroll content={content}/>
        </main>
      </LampContainer>
    </>
    
  );
}


function ActivityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
function AwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
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
function TrendingUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}