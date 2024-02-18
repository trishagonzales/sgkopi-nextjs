export abstract class Entity<Props> {
  protected _props: Props;

  constructor(props: Props) {
    this._props = props;
  }

  get props() {
    return this._props;
  }
}
