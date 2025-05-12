import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const text = 'Bienvenidos a Los Primos';
const text2 = 'Explora nuestro contenido';

export default function Home() {
  return (
    <div className='bg-black w-full h-full'>
      <div className='bg-black relative w-full h-[80vh] flex items-center justify-center'>
        <Image
          src='/assets/image1.webp'
          alt='TheCousins'
          layout='fill'
          objectFit='cover'
          className='opacity-70'
        />
        <div className='absolute text-center text-white'>
          <TextGenerateEffect words={text} className='text-4xl font-bold font-poppins' />
          <TextGenerateEffect words={text2} className='text-2xl font-poppins' />
        </div>
      </div>
      <div className='relative w-full h-[80vh] '>
        <h1 className='text-orange-500 text-4xl font-bold text-center font-openSans'>Holaaa gaspar</h1>
      </div>
    </div>
  );
}