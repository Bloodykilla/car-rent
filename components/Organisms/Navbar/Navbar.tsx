import { ActiveLink } from "@/components/Atoms/ActiveLink/ActiveLink";
import { Burger } from "@/components/Atoms/Buttons/Burger/Burger";
import { Button } from "@/components/Atoms/Buttons/Button/Button";
import { Container } from "@/components/Atoms/Container/Container";
import { Logo } from "@/components/Icons/Logo/Logo";
import { useScrollPosition } from "helpres/hooks/UseScrollPosition";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
    document.body.classList.toggle(styles.showMenu);
  };

  return (
    <div
      className={[
        styles.wrapper,
        scrollPosition > 0 && styles.scrollChanged,
      ].join(" ")}
    >
      <Container
        className={styles.container}
        display={"flex"}
        flexDirection={"row"}
        verticalIndent={"none"}
      >
        <Burger
          className={styles.burger}
          onClick={() => openMenuHandler()}
          isMenuOpen={openMenu}
        />
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <li>
              <ActiveLink href={"/rent"} label={"Rent"} color={"grey"} />
            </li>
            <li>
              <ActiveLink
                href={"/useful-information"}
                label={"Useful Information"}
                color={"grey"}
              />
            </li>
            <li>
              <ActiveLink
                href={"/transfers"}
                label={"Transfers"}
                color={"grey"}
              />
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <Link className={styles.phone} href={"tel:+436763730663"}>
            {"+ 43 676 373 0 663"}
          </Link>

          <Button href={"/car-order"} isBlueBorder={true} type={"outline"}>
            {"Manage my booking"}
          </Button>
        </div>
      </Container>
      <div onClick={() => openMenuHandler()} className={styles.backdrop}>
        <div
          onClick={(event) => event?.stopPropagation()}
          className={styles.modalMenu}
        >
          <Container
            className={styles.modalMenuContainer}
            display={"flex"}
            flexDirection={"col"}
            verticalIndent={"small"}
          >
            <nav className={styles.mobileNav}>
              <ul>
                <li>
                  <ActiveLink
                    onClick={() => openMenuHandler()}
                    href={"/rent"}
                    label={"Rent"}
                    color={"grey"}
                  />
                </li>
                <li>
                  <ActiveLink
                    onClick={() => openMenuHandler()}
                    href={"/useful-information"}
                    label={"Useful Information"}
                    color={"grey"}
                  />
                </li>
                <li>
                  <ActiveLink
                    onClick={() => openMenuHandler()}
                    href={"/transfers"}
                    label={"Transfers"}
                    color={"grey"}
                  />
                </li>
              </ul>
            </nav>
            <div className={styles.contactMobile}>
              <Link href={"tel:+436763730663"}>{"+ 43 676 373 0 663"}</Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
