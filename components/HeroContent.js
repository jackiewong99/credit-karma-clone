// Next.js Component
import Image from 'next/image';
// Images
import heroImg from '../assets/content/header-hero_img.jpg';
import contentImg_1 from '../assets/content/content-img1.png';
import contentImg_2 from '../assets/content/content-img2.png';
import contentImg_3 from '../assets/content/content-img3.png';

const titles = [
  'Easy-to-read credit reports and personalized score insights',
  'Tools & tips to help you understand your scores and take next steps',
  'Free credit monitoring that can help you detect identity theft',
];

const HeroContent = () => {
  return (
    <div className='p-0'>
      <section className='my-0 mx-auto max-w-none'>
        <div className='shadow-none rounded-none w-full p-0 my-0 mx-auto'>
          <section className='mt-0 mb-4 mx-auto max-h-[1200px] overflow-hidden'>
            <div>
              <Image
                src={heroImg}
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
          <div
            id='signup-content'
            className='flex flex-row flex-wrap justify-between items-baseline mt-0 mb-24 mx-auto pt-5 px-3 max-w-6xl'
          >
            <SignUpContent image={contentImg_1} text={titles[0]} />
            <SignUpContent image={contentImg_2} text={titles[1]} />
            <SignUpContent image={contentImg_3} text={titles[2]} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SignUpContent = ({ image, text }) => {
  return (
    <div className='flex flex-col items-center justify-center w-[27%] py-3'>
      <div id='thumbnail' className='h-28'>
        <a href='/' rel='noopener'>
          <Image
            src={image}
            alt='Image of Benefits'
            className='max-h-72 h-full w-auto max-w-full m-0'
          />
        </a>
      </div>
      <div id='text' className='text-center'>
        <p className='leading-8 my-2 font-bold text-gray-700 text-lg'>{text}</p>
        <a href='/' rel='noopener' className='no-underline text-sm'>
          Sign up for free
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
