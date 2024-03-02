import Mantine from './mantineTheme';

export default function Providers(props: React.PropsWithChildren) {
  return <Mantine>{props.children}</Mantine>;
}
