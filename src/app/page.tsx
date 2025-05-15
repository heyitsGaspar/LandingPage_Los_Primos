'use client'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'motion/react'
import { InfiniteMovingCardsFoods } from '@/components/landing/infiniteCards'
import { CardStackFoods } from '@/components/landing/cardStack'
import { AboutUs } from '@/components/landing/aboutUs'

const text = 'Bienvenidos a Los Primos'
const text2 = 'Hamburguesas, hot dogs, esquites, y más...'
const text3 = 'Explora nuestro Menú'
const text4 =
  'Desde hamburguesas jugosas, esquites con el toque perfecto y postres irresistibles. En Los Primos tenemos antojos para todos los gustos.¡Descubre lo que tenemos para ti y déjate sorprender!'
// const text5 = 'Acerca de nosotros'
// const text6 = 'En Los Primos, somos un equipo apasionado por la comida deliciosa y la diversión. Nos especializamos en ofrecerte una experiencia gastronómica única con nuestras hamburguesas jugosas, hot dogs irresistibles y esquites con el toque perfecto. Nuestro compromiso es brindarte calidad, sabor y un ambiente acogedor para que disfrutes de cada bocado. ¡Ven y descubre por qué somos los primos de la buena comida!'

export default function Home () {
  return (
    <div className='bg-black w-full '>
      <div className=' relative w-full min-h-screen flex items-center justify-center'>
        <Image
          src='/assets/img2.webp'
          alt='TheCousins'
          layout='fill'
          objectFit='cover'
          className='opacity-50 blur-xs  z-0'
        />

        <div className='absolute text-center px-4 z-10'>
          <TextGenerateEffect
            words={text}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-white'
          />

          <TextGenerateEffect
            words={text2}
            className='text-xl sm:text-2xl font-poppins text-tittle mt-4'
          />
        </div>
      </div>
      
       <motion.div
        className='relative w-full min-h-[40vh] p-5'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCardsFoods />
      </motion.div>
      {/* Sección de menú y tarjetas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 p-6'
      >
        <Image
          src='/assets/img7.webp'
          alt='TheCousins'
          fill
          priority
          className='object-cover opacity-70 blur-xs absolute inset-0 z-0'
        />

        <div className='relative z-10 w-full md:w-1/2 flex  p-2 flex-col items-center md:items-start text-center md:text-left'>
          <TextGenerateEffect
            words={text3}
            className='text-3xl sm:text-4xl font-poppins text-tittle'
          />

          <TextGenerateEffect
            words={text4}
            className='text-base sm:text-lg pt-4 font-poppins text-white max-w-xl'
          />

          <button className='bg-white text-black font-poppins font-bold px-6 py-2 rounded-md mt-6 hover:bg-gray-200 transition duration-300'>
            Ver Menú
          </button>
        </div>

        <div className='relative z-10 py-10 mb-15  w-full md:w-1/2 flex justify-center'>
          <CardStackFoods />
        </div>
      </motion.div>
      <motion.div
        className=' w-full h-[100vh] '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      >
        <div>
          <AboutUs />
        </div>
      </motion.div>
    </div>
  )
}
