import { Container } from '@/Components/Container/Container'
import Para from '@/Components/Elements/Para'
import SubTitle from '@/Components/Elements/SubTitle'
import Title from '@/Components/Elements/Title'
import Image from 'next/image'
import React from 'react'

export const ServiceSample = () => {
  return (
    <div className='bg-[#f3f2f1] py-12 lg:py-28 px-4 xl:px-0'>
        <Container>
            <div className='grid  lg:gap-12 md:flex justify-between items-center space-y-5'>
                <div className='space-y-4 w-[700px] lg:space-y-6'>
                    <SubTitle>PROJECTS</SubTitle>
                    <Title> <span className='text-primary'>We are proud </span> of our work. Check them out.</Title>
                    <Para>Aleodev remain the best at delivering web design and mobile app development services. We have helped a lot of local and international businesses to establish a stunning online presence, through our services</Para>
                </div>

            <div className='relative  '>
                    <Image alt="" src='/images/service-sample.png' width={500} height={600} className='w-full x300px] mx-auto ' />
                    
            </div>
            </div>
        </Container>
    </div>
  )
}
