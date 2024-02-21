import { Entity } from '@/domain/entity';

export class ProductProps {
  constructor(
    public id: string,
    public imageUrl: string,
    public name: string,
    public description: string,
    public price: number,
    public category: string
  ) {}
}

export default class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps) {
    super(props);
  }

  static reconstruct(props: ProductProps) {
    return new Product(props);
  }
}
