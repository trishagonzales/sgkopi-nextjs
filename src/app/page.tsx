import cs from './home.module.scss';
import Image from 'next/image';
import Button from '@/shadcn/button';
import heroImage from '@public/image/image-3.jpg';
import * as Fi from 'react-icons/fi';
import * as Lia from 'react-icons/lia';
import * as Pi from 'react-icons/pi';
import * as Fa6 from 'react-icons/fa6';
import * as Fa from 'react-icons/fa';
import * as Ri from 'react-icons/ri';
import Link from 'next/link';
import Footer from './_homepage/Footer';

export default function Home() {
  return (
    <main className={cs['homepage']}>
      <Hero />
      <FeatureStrip />
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
        <Button className={cs['hero-btn']} size='lg' variant='default'>
          Order Now
        </Button>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className={cs['feature']}>
      <div className={cs['feature-content']}>
        <article className={cs['feature-item']}>
          <Fi.FiCoffee className={cs['feature-icon']} />
          <h3>Guaranteed Fresh</h3>
          <p>A Commitment to Quality You Can Taste</p>
        </article>

        <article className={cs['feature-item']}>
          <Pi.PiShieldCheckBold className={cs['feature-icon']} />
          <h3>Secure Payment</h3>
          <p>Peace of Mind with Every Checkout</p>
        </article>

        <article className={cs['feature-item']}>
          <Lia.LiaShippingFastSolid className={cs['feature-icon']} />
          <h3>Fast Delivery</h3>
          <p>Speedy Service, Because Good Coffee Can't Wait</p>
        </article>
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

function Menu() {
  return (
    <section className={cs['menu']}>
      <h2 className={cs['section-title']}>Menu</h2>
    </section>
  );
}
