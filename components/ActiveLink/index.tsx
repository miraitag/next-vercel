import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface IActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }: IActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
