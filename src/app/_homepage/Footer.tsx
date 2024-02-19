import { classed } from '@tw-classed/react';
import { classed as css } from '@tw-classed/core';
import Image from 'next/image';

import sgkopiLogo from '/public/logo/sg-kopi-logo.svg';
import * as Fa6 from 'react-icons/fa6';
import * as Io5 from 'react-icons/io5';

export default function Footer() {
  return (
    <FooterStyled>
      <Content>
        <TopContent>
          <Column className='basis-[40%] grid gap-lg'>
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

          <Column className='flex-initial basis-[25%]'>
            <ColumnTitle>Links</ColumnTitle>
            <ul className='grid justify-items-start'>
              <li>
                <a href='' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='' className='hover:underline'>
                  Menu
                </a>
              </li>
              <li>
                <a href='' className='hover:underline'>
                  Promos
                </a>
              </li>
              <li>
                <a href='' className='hover:underline'>
                  About
                </a>
              </li>
            </ul>
          </Column>

          <Column className='basis-[35%] grid gap-xs'>
            <ColumnTitle>Contact Us</ColumnTitle>

            <ContactItem className='items-center gap-md'>
              <Fa6.FaPhoneFlip className={contactIcon()} />
              <p>(077) 722-0372</p>
            </ContactItem>

            <ContactItem className='items-center gap-md'>
              <Io5.IoMailSharp className={contactIcon({ class: 'text-2' })} />
              <p>info@sg-kopi.com</p>
            </ContactItem>

            <ContactItem className='items-start gap-sm'>
              <Fa6.FaMapLocationDot
                className={contactIcon({ class: 'text-3' })}
              />
              <p className='text-start max-w-[18rem]'>
                314 Bike Store Crisostomo Street Poblacion Uno, Pagsanjan,
                Philippines, 4008
              </p>
            </ContactItem>
          </Column>
        </TopContent>

        <hr className='mt-xl mb-lg border-t-xs border-bg-subtle' />

        <p>&copy; SG Kopi 2024. All Rights Reserved.</p>
      </Content>
    </FooterStyled>
  );
}

const FooterStyled = classed.button(
  'container max-w-page bg-bg-disabled text-xs text-fg-muted cursor-default'
);

const Content = classed.div('max-w-lg mx-auto py-lg pt-2xl');
const TopContent = classed.div('flex gap-lg items-start flex-col sm:flex-row');

const Column = classed.div('grow-1');
const ColumnTitle = classed.h3(
  'text-start text-fg-default font-semibold mb-xs'
);

const Brand = classed.div('flex items-center gap-xs');
const BrandName = classed.h2('font-brand text-5 text-fg-default');

const ContactItem = classed.div('flex text-xs');
const contactIcon = css('text-fg-subtle');
