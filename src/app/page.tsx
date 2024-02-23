'use client';

import cs from './home.module.scss';
import Image from 'next/image';
import Button from '@/primitives/button/Button';
import heroImage from '@public/image/image-3.jpg';
import * as Fi from 'react-icons/fi';
import * as Lia from 'react-icons/lia';
import * as Pi from 'react-icons/pi';
import * as Fa6 from 'react-icons/fa6';
import * as Fa from 'react-icons/fa';
import * as Ri from 'react-icons/ri';
import Link from 'next/link';
import Footer from './_homepage/Footer';
import Guarantees from './_homepage/Guarantees';
import Product from '@/modules/product/Product';
import { faker } from '@faker-js/faker';
import ProductCard from './product/ProductCard';

export default function Home() {
  return (
    <main className={cs['homepage']}>
      <Hero />
      <Guarantees />
      <Promo />
      <NewProducts />
      <Menu />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className={cs['hero']}>
      <Image
        className={cs['hero-image']}
        alt='Coffee Cup'
        src={heroImage}
        priority
      />

      <div className={cs['hero-image-overlay']}></div>

      <div className={cs['hero-title-container']}>
        <h1 className={cs['hero-title']}>SG KOPI</h1>
        <p className={cs['hero-subtitle']}>Discover the Taste of Singapore</p>
        <Button className={cs['hero-btn']} size='lg'>
          Order Now
        </Button>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className={cs['promo']}>
      <h2 className={cs['section-title']}>Special Promo</h2>
    </section>
  );
}

function NewProducts() {
  return (
    <section className={cs['new-products-section']}>
      <h2 className={cs['section-title']}>New Products</h2>
    </section>
  );
}

const productData = Product.reconstruct({
  id: faker.string.uuid(),
  imageUrl: '/image/image-2.jpg',
  name: 'Matcha Espresso',
  description: faker.commerce.productDescription(),
  price: Number(faker.commerce.price()),
  category: faker.commerce.department(),
});

function Menu() {
  return (
    <section className={cs['menu']}>
      <h2 className={cs['section-title']}>Menu</h2>

      <ProductCard product={productData} />
    </section>
  );
}
