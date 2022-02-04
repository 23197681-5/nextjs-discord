import NextLink from "next/link";
import { Input } from '@mui/material';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
