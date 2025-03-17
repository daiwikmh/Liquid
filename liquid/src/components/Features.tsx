import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Real-time Analytics",
    description: "Monitor your data in real-time with powerful analytics and insights.",
    icon: (
      <svg
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
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows with intelligent rules.",
    icon: (
      <svg
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
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    title: "Secure Storage",
    description: "Keep your data safe with enterprise-grade encryption and security.",
    icon: (
      <svg
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="container text-black mx-auto px-4 py-16 bg-[#d1d4c2]">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black">Powerful Features</h2>
        <p className="text-lg text-black">
          Discover what makes our platform unique and powerful.
        </p>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="snap-start shrink-0 first:pl-8 last:pr-8"
          >
            <div className="w-[320px] rounded-lg border bg-[#d1d4c2] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d1d4c2]/20 text-[#98a07d]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#4a503e]">{feature.title}</h3>
              <p className="text-[#5c634d]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}