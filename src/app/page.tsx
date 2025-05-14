'use client'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'motion/react'
import { InfiniteMovingCardsFoods } from '@/components/landing/infiniteCards'
import { LampContainer } from '@/components/ui/lamp'

const text = 'Bienvenidos a Los Primos'
const text2 = 'Hamburguesas, hot dogs, esquites, y más...'
// const text3 = 'Explora nuestros productos '

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
            className='text-2xl font-poppins text-white'
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
      
    </div>
  )
}
