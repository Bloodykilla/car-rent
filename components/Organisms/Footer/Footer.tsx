import { Container } from "@/components/Atoms/Container/Container";
import { Logo } from "@/components/Icons/Logo/Logo";
import Link from "next/link";
import styles from "./styles.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <Container
        className={styles.container}
        display={"flex"}
        flexDirection={"col"}
        verticalIndent={"none"}
      >
        <div className={styles.topRow}>
          <Logo color="white" className={styles.indents} />
          <nav className={[styles.nav, styles.indents].join(" ")}>
            <ul>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Useful Information</Link>
              </li>
              <li>
                <Link href={"/"}>Transfers</Link>
              </li>
            </ul>
          </nav>
          <div className={[styles.contact, styles.indents].join(" ")}>
            <Link href={"tel:+436763730663"}>{"+ 43 676 373 0 663"}</Link>
            <Link href={"mailto:info@careta.at"}>{"info@careta.at"}</Link>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <nav>
            <ul>
              <li>
                <Link href={"/"}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};
