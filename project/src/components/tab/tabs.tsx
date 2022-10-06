import { ReactNode } from "react";

interface TabProps {
  href?: string;
  children?: ReactNode;
}

interface TabsProps {
  theme: string;
  children?: TabProps[];
}

export default function Tabs({theme, children}: TabsProps) {
  return (
    <ul className={`${theme}__list`}>
      {children?.map((c) =>
        <li className={`${theme}__item ${theme}__item--active`}>
          <a href={c.href} className={`${theme}__link`}>{c.children}</a>
        </li>
      ) ?? null}
    </ul>
  );
}
