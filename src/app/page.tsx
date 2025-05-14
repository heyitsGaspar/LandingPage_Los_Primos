'use client'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'motion/react'
import { InfiniteMovingCardsFoods } from '@/components/landing/infiniteCards'
import { LampContainer } from '@/components/ui/lamp'
import { CardStackFoods } from '@/components/landing/cardStack'

const text = 'Bienvenidos a Los Primos'
const text2 = 'Hamburguesas, hot dogs, esquites, y más...'
const text3 = 'Explora nuestro Menú'
const text4 = 'Desde hamburguesas jugosas, esquites con el toque perfecto y postres irresistibles. En Los Primos tenemos antojos para todos los gustos.¡Descubre lo que tenemos para ti y déjate sorprender!'
const text5 = 'Acerca de nosotros'
const text6 = 'En Los Primos, somos un equipo apasionado por la comida deliciosa y la diversión. Nos especializamos en ofrecerte una experiencia gastronómica única con nuestras hamburguesas jugosas, hot dogs irresistibles y esquites con el toque perfecto. Nuestro compromiso es brindarte calidad, sabor y un ambiente acogedor para que disfrutes de cada bocado. ¡Ven y descubre por qué somos los primos de la buena comida!'

export default function Home () {
  return (
    <div className='bg-black w-full h-full'>
      <div className='bg-black relative w-full h-[100vh] flex items-center justify-center'>
        <Image
          src='/assets/img2.webp'
          alt='TheCousins'
          layout='fill'
          objectFit='cover'
          className='opacity-70 blur-xs '
        />

        <div className='absolute text-center'>
          <TextGenerateEffect
            words={text}
            className='text-7xl font-poppins text-white '
          />
          <TextGenerateEffect
            words={text2}
            className='text-2xl font-poppins text-orange-400'
          />
        </div>
      </div>
      <motion.div
        className='relative w-full  h-[45vh] '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='relative'>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut'
              }}
              className='mt-8 flex items-center justify-center  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium font-poppins  tracking-tight text-transparent md:text-5xl'
            >
              Explora <br />
              nuestros productos
            </motion.h1>
          </LampContainer>
        </div>
      </motion.div>
      <motion.div
        className='relative w-full h-[70vh] '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='relative'>
          <InfiniteMovingCardsFoods />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='bg-black relative w-full h-[100vh] flex items-start p-8'
      >
        <Image
          src='/assets/img7.webp'
          alt='TheCousins'
          layout='fill'
          objectFit='cover'
          className='opacity-70 blur-xs '
        />

        <div className='relative flex flex-col md:flex-row gap-8 w-full max-w-6xl'>
          <div className='md:w-1/2 text-white flex flex-col items-center justify-center'>
            <TextGenerateEffect
              words={text3}
              className='text-4xl font-poppins text-white '
            />
            <TextGenerateEffect
              words={text4}
              className='text-2xl pt-4 text-center font-poppins text-white'
            />

            <button className='bg-white text-black font-poppins font-bold flex items-end px-4 py-2 rounded-md mt-4 hover:bg-gray-200 transition duration-300'>
              Ver Menú

            </button>
          </div>
          <div className=' flex pl-20 pt-9 items-center justify-center  '>
              
            <CardStackFoods />
          </div>
        </div>
      </motion.div>
      <motion.div
        className=' w-full h-[100vh] '
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.10 }}
        viewport={{ once: true }}
      >
        <div className=' absolute text-center' >
            <TextGenerateEffect
            words={text5}
            className='text-7xl font-poppins pt-10 flex justify-center items-center text-center text-white '
          />
          <TextGenerateEffect
            words={text6}
            className='text-2xl font-poppins text-center p-10 text-white'
          />
        </div>
      </motion.div>
    </div>
  )
}