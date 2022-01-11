import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => (
  <Helmet>
    <meta name="keyword" content={title}></meta>
    <title>{title}</title>
  </Helmet>
);
