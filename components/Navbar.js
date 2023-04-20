import Image from 'next/image';
import creditKarmaLogo from '../assets/nav/creditkarma-logo.svg';

const Navbar = () => {
  return (
    <div className='flex justify-start items-center flex-row flex-nowrap h-16 w-full shadow-md'>
      <div className='flex items-center my-0 mr-[0.925rem] ml-[0.7rem] w-28 box-border'>
        <a href='/'>
          <Image
            src={creditKarmaLogo}
            alt='Credit Karma'
            width={125}
            height={80}
          />
        </a>
      </div>
      <nav className='flex items-start ml-auto box-border'>
        <ul className='flex items-center m-0 p-0 text-sm list-none box-border'>
          <li className='text-left border-none inline-block font-light'>
            <a
              href='/'
              className='py-[1.4375rem] px-[0.625rem] no-underline text-gray-500 hover:text-green-500'
            >
              Login
            </a>
          </li>
          <li className='text-left border-none inline-block font-light'>
            <a
              href='/'
              className='py-[1.4375rem] px-[0.625rem] no-underline text-gray-500 hover:text-green-500'
            >
              Sign up for free
            </a>
          </li>
          <li className='text-left border-none inline-block font-light'>
            <a
              href='/'
              className='py-[1.4375rem] px-[0.625rem] no-underline text-gray-500 hover:text-green-500'
            >
              Help center
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
