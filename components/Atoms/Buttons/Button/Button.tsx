import Link from "next/link";
import { forwardRef, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  children: ReactNode;
  /**
   * What link should be passed?
   */
  href: string;
  /**
   * What type of button styling should be?
   */
  type: "fill" | "outline";
  isBlueBorder?: boolean;
  className?: string;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    { children, href, type = "fill", isBlueBorder, className }: ButtonProps,
    ref
  ) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={[
          className,
          styles.container,
          styles[type],
          isBlueBorder && styles.blueBorder,
        ].join(" ")}
      >
        <span>{children}</span>
      </Link>
    );
  }
);
