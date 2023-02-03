import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface GridProps {
  children: ReactNode;
  display: "grid" | "flex";
  col?: "col-2" | "col-3";
  className?: string;
}

export const Grid = ({
  children,
  display,
  col = "col-2",
  className,
}: GridProps) => {
  return (
    <div className={[styles[display], styles[col], className].join(" ")}>
      {children}
    </div>
  );
};
