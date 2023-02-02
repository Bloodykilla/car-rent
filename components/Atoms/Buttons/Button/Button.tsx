import Link from "next/link";
import { ReactNode } from "react";
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

export const Button = ({
  children,
  href,
  type = "fill",
  isBlueBorder,
  className,
}: ButtonProps) => {
  return (
    <Link
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
};
