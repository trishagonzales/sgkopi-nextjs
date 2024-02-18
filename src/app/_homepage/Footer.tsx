import { classed } from '@tw-classed/react';
import sgkopiLogo from '/public/logo/sg-kopi-logo.svg';
import Image from 'next/image';
import * as Fa6 from 'react-icons/fa6';
import * as Io5 from 'react-icons/io5';

export default function Footer() {
  return (
    <FooterStyled>
      <Content>
        <Column className='grid gap-xs'>
          <Brand>
            <Image className='w-[2rem]' src={sgkopiLogo} alt='SG Kopi logo' />
            <BrandName>SG KOPI</BrandName>
          </Brand>

          <div className='flex gap-xs text-3'>
            <Fa6.FaSquareFacebook />
            <Fa6.FaSquareInstagram />
            <Fa6.FaXTwitter />
            <Fa6.FaTiktok />
          </div>
        </Column>

        <Column>
          <ColumnTitle>Links</ColumnTitle>
          <ul className='grid gap-0 justify-items-start'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Menu</a>
            </li>
            <li>
              <a href=''>Promos</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </Column>

        <Column className='grid gap-xs'>
          <ColumnTitle>Contact Us</ColumnTitle>

          <div className='flex items-center gap-sm text-xs'>
            <Fa6.FaPhoneFlip />
            <p>(077) 722-0372</p>
          </div>

          <div className='flex items-center gap-sm text-xs'>
            <Io5.IoMailSharp className='text-2' />
            <p>info@sg-kopi.com</p>
          </div>

          <div className='flex items-start gap-xs text-xs'>
            <Fa6.FaMapLocationDot className='text-3' />
            <p className='text-start max-w-[15rem]'>
              314 Bike Store Crisostomo Street Poblacion Uno, Pagsanjan,
              Philippines, 4008
            </p>
          </div>
        </Column>
      </Content>
    </FooterStyled>
  );
}

const FooterStyled = classed.button(
  'container max-w-page bg-bg-disabled text-xs'
);
const Content = classed.div('max-w-content mx-auto py-lg flex items-start');

const Column = classed.div('flex-auto');
const ColumnTitle = classed.h3('text-start font-semibold mb-xs');

const Brand = classed.div('flex items-center gap-xs');
const BrandName = classed.h2('font-brand text-5');
