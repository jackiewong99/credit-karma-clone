import Image from 'next/image';
import HeroImg from '../assets/content/header-hero_img.jpg';

const HeroContent = () => {
  return (
    <div className='p-0'>
      <section className='my-0 mx-auto max-w-none'>
        <div className='shadow-none rounded-none w-full p-0 my-0 mx-auto'>
          <section className='mt-0 mb-4 mx-auto max-h-[1200px] overflow-hidden'>
            <div>
              <Image
                src={HeroImg}
                alt='Credit Karma Hero Image'
                className='w-full h-auto m-0 object-cover max-h-none min-h-[380px] border-none'
              />
            </div>
            <div className='my-0 mx-auto pt-[100px] pb-[20px] px-0 max-w-6xl max-h-[737px] h-full flex items-center justify-center absolute top-0 inset-x-0 border-box'>
              <div className='p-0 flex-row flex w-full'>
                <div className='flex flex-col items-center justify-center my-0 mx-auto py-0 px-2 max-w-3xl text-center'>
                  <h1 className='mb-4 font-bold text-3xl text-blue'>
                    Your credit scores should be free. And now they are.
                  </h1>
                  <p className='mb-8 text-lg text-blue'>
                    100% Free. No Credit Card Required.
                  </p>
                  <div className='max-w-[400px]'>
                    <a
                      href='/'
                      rel='noopener'
                      className='w-full inline-block bg-green-300 py-[20px] px-[68px] text-lg font-bold text-white text-center rounded cursor-pointer transition hover:bg-green-400 hover:ease-out hover:duration-300'
                    >
                      See my scores
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default HeroContent;
