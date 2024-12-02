import { Container } from '@/Components/Container/Container'
import Image from 'next/image'
import React from 'react'

export const AboutSection = () => {
  return (
     <Container className='bg-white -mt-[350px] lg:-mt-[190px] rounded-2xl relative overflow-hidden'>
    <div className="flex flex-col md:flex-row items-center gap-8 ">
      <div className="w-full md:w-1/2">
        <div className="relative w-full aspect-square lg:w-[500px] mx-auto">
          <Image
            src="/images/about-illustration.png"
            alt="Developer illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="w-full  space-y-6 px-8">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
          We offer Core ERP and print communication solutions.
        </h1>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            We are passionate about your brand&apos;s online and offline reputation and so we work with you to create diverse offerings for your digital growth and strategy.
          </p>
          <p>
            Our in-house team of web designers, copywriters, graphic designers and developers uphold the highest standards for project planning and execution, on time and on a budget.
          </p>
        </div>
      </div>
  </div></Container>
  )
}
