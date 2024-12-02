import { Container } from "@/Components/Container/Container"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Doe",
    role: "Software engineer Founder & CEO Alexdev",
    description: "We take the time to understand your business needs and work with you to create a strategy and direction for the accomplishment of your commercial objectives.",
    image: "/images/team2.png",
  },
  {
    name: "Princess Miria",
    role: "Fullstack engineer Founder & CEO Alexdev",
    description: "We take the time to understand your business needs and work with you to create a strategy and direction for the accomplishment of your commercial objectives.",
    image: "/images/team1.png",
  },
  
]

export default function TeamSection() {
  return (
    <section className="bg-[var(--background)] py-16 md:py-24 px-4 lg:px-0">
      <Container>
        <div className="">
          <div className=" mb-16 lg:flex items-center lg:space-x-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 lg:w-full">
              We are a team
              <span className="block">diversed expertise</span>
            </h2>
            <p className="text-lg text-gray-600 w-full text-left">
              We take the time to understand your business needs and work with you to create a strategy and direction for the accomplishment of your commercial objectives.
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 lg:text-xl">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

