import Image from 'next/image';
import { classed } from '@tw-classed/react';
import * as Fa6 from 'react-icons/fa6';

import Button from '@/primitives/button/Button';
import Product from '@/modules/product/Product';
import cs from './ProductCard.module.scss';

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  const product = props.product;

  return (
    <Card>
      <ImageContainer>
        <Image
          className={cs.image}
          alt={product.props.name}
          src={product.props.imageUrl}
          sizes='(max-width: 480px) 100vw, (max-with: 768px) 50vw, 25vw'
          fill
        />
      </ImageContainer>

      <div>
        <Name>{product.props.name}</Name>
        <Price>
          <Peso />
          {product.props.price}
        </Price>
      </div>

      <ButtonGroup>
        <Button isIcon variant='outline' className={cs.whishlistBtn} >
          <Fa6.FaRegHeart />
        </Button>
        <Button variant='solid' className={cs.orderBtn}>
          Order
        </Button>
      </ButtonGroup>
    </Card>
  );
}

const Card = classed.article(cs.card);
const ImageContainer = classed.div(cs.imageContainer);

const Name = classed.h3(cs.name);
const Price = classed.p(cs.price);
const ButtonGroup = classed.div('flex gap-xs');

const Peso = () => <span className='mr-[5px]'>&#8369;</span>;
