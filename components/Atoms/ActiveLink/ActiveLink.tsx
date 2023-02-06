import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface ActiveLinkProps {
  href: string;
  label: string;
  color: "grey" | "white" | "lightGrey";
  className?: string;
  onClick?: () => void;
}

export const ActiveLink = ({
  href,
  label,
  color,
  className,
  onClick,
}: ActiveLinkProps) => {
  const router = useRouter();

  return (
    <div className={[styles.container, className].join(" ")}>
      <Link
        onClick={onClick}
        href={href}
        className={[
          styles[color],
          router.asPath.includes(href) && styles.active,
        ].join(" ")}
      >
        {label}
      </Link>
      {router.asPath.includes(href) && <div className={styles.border} />}
    </div>
  );
};
