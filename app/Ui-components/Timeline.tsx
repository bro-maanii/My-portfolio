import Image from "next/image"

interface TimelineItem {
  title: string
  organization: string
  period: string
  icon: string
}

const timelineData: TimelineItem[] = [
  {
    title: "Junior Frontend Developer",
    organization: "TemplateSpace",
    period: "September 2024 - December 2024",
    icon: "/company.png",
  },
  {
    title: "Bachelor's in Software Engineering",
    organization: "University Of Karachi",
    period: "February 2022 - Present",
    icon: "/ku_icon.jpg",
  }
]

export default function ProfessionalTimeline() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl text-center mb-6">MY TIMELINE</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Icon container */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg p-2 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col pt-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mb-1">{item.organization}</p>
                <p className="text-sm ">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

