import SubTitle from '@/Components/Elements/SubTitle'
import Title from '@/Components/Elements/Title'
import { ArrowUpRight, Users, Star, Rocket, Award, Target } from 'lucide-react'

export default function HowWeStarted() {
  return (
    <section className="bg-dark text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <SubTitle>HOW WE STARTED</SubTitle>
            <Title>
              ALEODEV at a <span className="text-amber-600">glance</span>
            </Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
            <div className="flex gap-4 lg:p-4 ">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Founded in 2011</h4>
                <p className="text-gray-400">Founded in 2011 Yes, we have been in business for over 10 solid years.</p>
              </div>
            </div>

            <div className="flex gap-4 lg:p-4 ">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Team of 5 People</h4>
                <p className="text-gray-400">Full-time, and ready to help your business grow.</p>
              </div>
            </div>

            <div className="flex gap-4 lg:p-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">4.8/5 rating on Google</h4>
                <p className="text-gray-400">Based on over 90 reviews by clients and fans.</p>
              </div>
            </div>

            <div className="flex gap-4 lg:p-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Over 450 projects</h4>
                <p className="text-gray-400">Comprising web design, digital marketing and branding services.</p>
              </div>
            </div>

            <div className="flex gap-4 lg:p-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Certified Personnel</h4>
                <p className="text-gray-400">Work with marketers certified by Google, Hubspot and CIW.</p>
              </div>
            </div>

            <div className="flex gap-4 lg:p-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Our Philosophy</h4>
                <p className="text-gray-400">The only thing that matters is result.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

