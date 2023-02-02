import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
  /**
   * Which display type should be?
   */
  display: "block" | "flex";
  /**
   * Which vertical indent should be?
   */
  verticalIndent: "medium" | "large" | "small" | "none";
  /**
   * Which flex direction should be?
   */
  flexDirection?: "col" | "row";
  className?: string;
}

export const Container = ({
  children,
  display = "block",
  verticalIndent = "large",
  flexDirection = "col",
  className,
}: ContainerProps) => {
  return (
    <div
      className={[
        styles.container,
        styles[display],
        styles[verticalIndent],
        styles[flexDirection],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
