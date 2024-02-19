import { classed } from '@tw-classed/react';
import * as Fi from 'react-icons/fi';
import * as Lia from 'react-icons/lia';
import * as Pi from 'react-icons/pi';
import cs from './Guarantees.module.scss';

export default function Guarantees() {
  return (
    <Section>
      <Content>
        <Item>
          <Fi.FiCoffee className={cs['icon']} />
          <h3>Guaranteed Fresh</h3>
          <p>A Commitment to Quality You Can Taste</p>
        </Item>

        <Item>
          <Pi.PiShieldCheckBold className={cs['icon']} />
          <h3>Secure Payment</h3>
          <p>Peace of Mind with Every Checkout</p>
        </Item>

        <Item>
          <Lia.LiaShippingFastSolid className={cs['icon']} />
          <h3>Fast Delivery</h3>
          <p>Speedy Service, Because Good Coffee Can't Wait</p>
        </Item>
      </Content>
    </Section>
  );
}

const Section = classed.section('bg-bg-default');
const Content = classed('div', cs.content, {
  base: 'mx-auto py-2xl max-w-lg divide-x-xs divide-bg-subtle',
});

const Item = classed.article('px-md', cs.item);
