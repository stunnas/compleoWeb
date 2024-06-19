export default function Prices() {
    
    return (
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pay for what you use.</h2>
              <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white-500">
                Time is money.
              </p>
              <div className="inline-block text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Simple Pricing</div>
            </div>
          </div>
          
          <div className="mx-auto my-36 grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="inline-block text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Personal</div>
              <div className="flex items-baseline gap-1">
                <span className="text-white text-3xl font-semibold">$0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for use for daily tasks, tracking personal feelings, as well as basic cases.</p>
              <button className="mt-4 border-white text-white border-2 rounded-md">Start with Personal</button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="inline-block text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pro</div>
              <div className="flex items-baseline gap-1">
                <span className="text-white text-3xl font-semibold">$10</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/user/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Advanced features for teams and collaborators</p>
              <button className="mt-4 border-white text-white border-2 rounded-md">Upgrade to Pro</button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="inline-block text-white rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Enterprise</div>
              <div className="flex items-baseline gap-1">
                <span className="text-white text-3xl font-semibold">$20</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/user/month</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Customizable plan with support options including 1-on-1 consultations.</p>
              <button className="mt-4 border-white text-white border-2 rounded-md">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    )
}

