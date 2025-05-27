import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-gray-950 text-gray-300 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Sección Principal del Footer: Grid de 4 columnas */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10 mb-10'>

          {/* Columna 1: Logo y Descripción */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <Image
              src='/assets/logo.webp' 
              alt='Los Primos Logo'
              width={100}
              height={100}
              className='rounded-full mb-4 shadow-lg'
            />
            <p className='text-2xl font-poppins font-bold text-white mb-2'>Los Primos</p>
            <p className='text-sm leading-relaxed'>
              Los Primos es un restaurante familiar en Kinchil, Yucatán, que ofrece una experiencia culinaria auténtica con un menú variado de platillos.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-3'>
               {['Home', 'Menú', 'Sobre Nosotros'].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                className='hover:text-yellow-400 font-semibold transition-colors duration-300'
              >
                {item}
              </a>
            </li>
          ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block'>
              Contacto
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-center justify-center md:justify-start'>
                <FaMapMarkerAlt className='mr-3 text-lg text-red-400' />
                <span>Calle 25, Kinchil, Yucatán, México</span>
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <FaPhone className='mr-3 text-lg text-green-400' />
                <a href='tel:+1234567890' className='hover:text-white transition-colors duration-300'>
                  +52 999 647 3727
                </a>
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <FaEnvelope className='mr-3 text-lg text-blue-400' />
                <a href='mailto:info@losprimos.com' className='hover:text-white transition-colors duration-300'>
                  info@losprimos.com
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales y Newsletter (Ejemplo) */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2 inline-block'>
              Síguenos
            </h3>
            <div className='flex justify-center md:justify-start space-x-6 mb-8'>
              <a href='https://www.facebook.com/profile.php?id=61572894936749' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110'>
                <FaFacebookF size={28} />
              </a>
              <a href='https://wa.me/+529996473727' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110'>
                <FaWhatsapp size={28} />
              </a>
             
            </div>

            <h3 className='text-xl font-semibold text-white mb-4'>
              Suscríbete
            </h3>
            <form className='flex'>
              <input
                type='email'
                placeholder='Tu email'
                className='flex-grow p-3 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors duration-300'
              >
                Enviar
              </button>
            </form>
          </div>

        </div>

        {/* Sección de Copyright Final */}
        <div className='text-center text-sm text-gray-500'>
          <p className='font-poppins'>
            © {new Date().getFullYear()} Los Primos. Todos los derechos reservados.
          </p>
          <p className='mt-1'>
            Diseñado con ❤️ por GaspiWest
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;