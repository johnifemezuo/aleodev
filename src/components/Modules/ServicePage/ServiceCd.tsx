import { ScrollReveal } from '@/components/Animations/ScrollReveal'
import React from 'react'

const ServiceCd = ({title, description, icon}:{title: string; description: string; icon?: React.ReactNode}) => {
  return (
    <ScrollReveal hidden={{ y: 100 }} delay={0.4} visible={{ y: 0 }}>
    {/* Website Design Card */}
    <div className="bg-white rounded-md p-8 shadow-md lg:min-h-[450px]">
      <div className="h-12 w-12 bg-[#FFF5EA] rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#B88746] mb-6">
      {title}
      </h3>
      <p className=" text-base lg:text-lg text-zinc-600">
      {description}
      </p>
    </div>
  </ScrollReveal>
  )
}

export default ServiceCd