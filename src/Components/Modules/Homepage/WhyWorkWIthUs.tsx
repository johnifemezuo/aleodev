import { Container } from '@/Components/Container/Container'
import SubTitle from '@/Components/Elements/SubTitle'
import Title from '@/Components/Elements/Title'
import Image from 'next/image'
import React from 'react'

export const WhyWorkWIthUs = () => {
  return (
    <div className='bg-white py-12 lg:py-32 px-4 xl:px-0'>
        <Container>
            <div className='grid  lg:gap-12 md:flex items-center space-y-5'>
                <div className='space-y-4 lg:w-[700px]'>
                    <SubTitle>WHY WORK WITH US</SubTitle>
                    <Title> <span className='text-primary'>Why Brands</span> Like Yours Strive To Work With Us</Title>
                </div>

                    <Image alt="" src='/images/brands.png' width={500} height={600} className='max-w-[600px] xl:w-full' />
            </div>
        </Container>
    </div>
  )
}
