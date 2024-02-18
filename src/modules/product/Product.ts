import { Entity } from '@/domain/entity';

export class ProductProps {
  constructor(
    public id: string,
    public image: string,
    public name: string,
    public description: string,
    public price: string,
    public category: string
  ) {}
}

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps) {
    super(props);
  }

  static reconstruct(props: ProductProps) {
    return new Product(props);
  }
}
