// Next.js component
import Image from 'next/image';
// Icons
import { Facebook, Instagram, Twitter } from 'react-feather';
// Image for QR code
import qrScanCode from '../assets/footer/qr-scanCode.png';
import digiCert from '../assets/footer/digicert.png';

const Footer = () => {
  return (
    <div className='mt-16 py-16 px-8 bg-black'>
      <div className='flex justify-around items-center max-w-7xl mx-auto'>
        {/* Social icons and QR code */}
        <div
          id='socialIcons'
          className='flex justify-around items-center w-1/2'
        >
          <Instagram size={24} color='white' />
          <Twitter size={24} color='white' />
          <Facebook size={24} color='white' />
        </div>
        <div id='qr-scanCode' className='flex justify-center items-start w-1/2'>
          <Image
            src={qrScanCode}
            alt='Credit Karma App QR Code'
            width={150}
            height={150}
          />
          <p className='ml-4 text-gray-300'>
            Scan the QR code to download the app
          </p>
        </div>
      </div>
      {/* Legal text */}
      <div
        id='legalText'
        className='flex justify-around items-start max-w-7xl mx-auto mt-9'
      >
        <div id='section-1' className='flex justify-center w-1/5'>
          <Image src={digiCert} alt='digicert image' width={59} height={35} />
        </div>
        <div id='section-2' className='w-2/5'>
          <div className='text-gray-300 text-xs'>
            Digicert Certificate © 2007–2023 Credit Karma, LLC. Credit Karma® is
            a registered trademark of Credit Karma, LLC. All Rights Reserved.
            Product name, logo, brands, and other trademarks featured or
            referred to within Credit Karma are the property of their respective
            trademark holders. This site may be compensated through third party
            advertisers.
          </div>
          <div className='text-gray-300 text-xs'>
            Credit Karma Mortgage, Inc. NMLS ID# 1588622 |{' '}
            <a href='/' className='text-white underline'>
              Licenses
            </a>{' '}
            |{' '}
            <a href='/' className='text-white underline'>
              NMLS Consumer Access
            </a>{' '}
            Credit Karma Offers, Inc. NMLS ID# 1628077 |{' '}
            <a href='/' className='text-white underline'>
              Licenses
            </a>{' '}
            |{' '}
            <a href='/' className='text-white underline'>
              NMLS Consumer Access
            </a>{' '}
            Credit Karma Credit Builder (McBurberod Financial, Inc.) NMLS
            2057952 |{' '}
            <a href='/' className='text-white underline'>
              Licenses
            </a>{' '}
            |{' '}
            <a href='/' className='text-white underline'>
              NMLS Consumer Access
            </a>{' '}
            California loans arranged pursuant to Department of Financial
            Protection and Innovation Finance Lenders License #60DBO-78868.
          </div>
          <div className='text-gray-300 text-xs'>
            Auto, homeowners, and renters insurance services offered through
            Karma Insurance Services, LLC (CA resident license #0172748).
          </div>
          <div className='text-gray-300 text-xs'>
            Only mortgage activity by Credit Karma Mortgage, LLC., dba Credit
            Karma is licensed by the State of New York. Credit Karma, Inc. and
            Credit Karma Offers, Inc. are not registered by the NYS Department
            of Financial Services. Insurance related services offered through
            Credit Karma Insurance Services, LLC, which does business in some
            states as Karma Insurance Services, LLC.{' '}
            <a href='/' className='text-white underline'>
              Licenses
            </a>{' '}
            | CA license #0172748.
          </div>
        </div>
        <div id='section-3' className='w-2/5'>
          <div className='text-gray-300 text-xs'>
            iPhone is a trademark of Apple Inc., registered in the U.S. and
            other countries. App Store is a service mark of Apple Inc.
          </div>
          <div className='text-gray-300 text-xs'>
            Android is a trademark of Google Inc.
          </div>
          <div className='text-gray-300 text-xs'>
            The Equifax logo is a registered trademark owned by Equifax in the
            United States and other countries.
          </div>
          <div className='text-gray-300 text-xs'>
            Credit Karma is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone, and applying the relevant accessibility
            guidelines. If you have specific questions about the accessibility
            of this site, or need assistance with using this site, contact us.
          </div>
          <div className='text-gray-300 text-xs'>
            CREDIT KARMA OFFERS, INC. 1100 Broadway, STE 1800 Oakland, CA 94607
            Credit Karma Offers, Inc. NMLS ID# 1628077 | Licenses | NMLS
            Consumer Access
          </div>
        </div>
      </div>
      {/* Footer links */}
      <div
        id='footerLinks'
        className='flex justify-around items-center max-w-7xl mt-9 mx-auto'
      >
        <div>
          <a
            href='/'
            rel='noopener'
            className='text-gray-300 text-sm font-bold no-underline'
          >
            ABOUT CREDIT KARMA
          </a>
        </div>
        <div>
          <a
            href='/'
            rel='noopener'
            className='text-gray-300 text-sm font-bold no-underline'
          >
            TERMS OF SERVICE
          </a>
        </div>
        <div>
          <a
            href='/'
            rel='noopener'
            className='text-gray-300 text-sm font-bold no-underline'
          >
            {' '}
            PRIVACY POLICY
          </a>
        </div>
        <div>
          <a
            href='/'
            rel='noopener'
            className='text-gray-300 text-sm font-bold no-underline'
          >
            ARTICLES
          </a>
        </div>
        <div>
          <a
            href='/'
            rel='noopener'
            className='text-gray-300 text-sm font-bold no-underline'
          >
            FREE CREDIT SCORES
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
