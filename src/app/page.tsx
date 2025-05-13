'use client'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion} from 'motion/react'
import { InfiniteMovingCardsFoods } from '@/components/landing/infiniteCards'

const text = 'Bienvenidos a Los Primos'
const text2 = 'Hamburguesas, hot dogs, esquites, y más...'
const text3 = 'Explora nuestros productos '

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
        className='relative w-full h-[vh]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='relative  '>
          <TextGenerateEffect
            words={text3}
            className='text-4xl text-center pt-10 font-poppins text-white '
          />
        </div>
        <InfiniteMovingCardsFoods />
      </motion.div>
    </div>
  )
}
