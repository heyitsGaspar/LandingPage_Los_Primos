'use client'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'motion/react'
import { InfiniteMovingCardsFoods } from '@/components/landing/infiniteCards'
import { LampContainer } from '@/components/ui/lamp'
import { CardStackFoods } from '@/components/landing/cardStack'
import { AboutUs } from '@/components/landing/aboutUs'

const text = 'Bienvenidos a Los Primos'
const text2 = 'Hamburguesas, hot dogs, esquites, y más...'
const text3 = 'Explora nuestro Menú'
const text4 =
  'Desde hamburguesas jugosas, esquites con el toque perfecto y postres irresistibles. En Los Primos tenemos antojos para todos los gustos. ¡Descubre lo que tenemos para ti y déjate sorprender!'

export default function Home () {
  return (
    <div className='bg-black w-full'>
            {/* Hero */}     {' '}
      <div className='relative w-full min-h-screen flex items-center justify-center'>
               {' '}
        <Image
          src='/assets/img2.webp'
          alt='TheCousins'
          fill
          priority
          className='object-cover opacity-50 blur-xs z-0'
        />
               {' '}
        <div className='absolute text-center px-4 z-10'>
                   {' '}
          <TextGenerateEffect
            words={text}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-white'
          />
                   {' '}
          <TextGenerateEffect
            words={text2}
            className='text-xl sm:text-2xl font-poppins text-tittle mt-4'
          />
                 {' '}
        </div>
             {' '}
      </div>
            {/* Sección de título */}     {' '}
      <motion.div
        className='relative w-full min-h-[20vh] flex items-center justify-center py-2 md:min-h-[30vh]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
               {' '}
        <LampContainer>
                   {' '}
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeInOut'
            }}
            className='text-center text-2xl sm:text-3xl md:text-5xl font-medium font-poppins bg-gradient-to-br from-slate-300 to-slate-700 bg-clip-text text-transparent'
          >
                        Explora <br />            nuestros productos          {' '}
          </motion.h1>
                 {' '}
        </LampContainer>
             {' '}
      </motion.div>
            {/* Sección de tarjetas en movimiento */}     {' '}
      <motion.div
        className='relative w-full min-h-[40vh] p-5'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
                <InfiniteMovingCardsFoods />     {' '}
      </motion.div>
            {/* Sección de menú y tarjetas */}     {' '}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 p-6'
      >
               {' '}
        <Image
          src='/assets/img7.webp'
          alt='TheCousins'
          fill
          priority
          className='object-cover opacity-70 blur-xs absolute inset-0 z-0'
        />
               {' '}
        <div className='relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
                   {' '}
          <TextGenerateEffect
            words={text3}
            className='text-3xl sm:text-4xl font-poppins text-tittle'
          />
                   {' '}
          <TextGenerateEffect
            words={text4}
            className='text-base sm:text-lg pt-4 font-poppins text-white max-w-xl'
          />
                   {' '}
          <button className='bg-white text-black font-poppins font-bold px-6 py-2 rounded-md mt-6 hover:bg-gray-200 transition duration-300'>
                        Ver Menú          {' '}
          </button>
                 {' '}
        </div>
               {' '}
        <div className='relative z-10 w-full md:w-1/2 flex justify-center'>
                    <CardStackFoods />       {' '}
        </div>
             {' '}
      </motion.div>
            {/* Acerca de nosotros */}     {' '}
      <motion.div
        className='w-full min-h-screen '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
                <AboutUs />     {' '}
      </motion.div>
         {' '}
    </div>
  )
}
