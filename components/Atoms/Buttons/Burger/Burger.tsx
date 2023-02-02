import styles from "./styles.module.scss";

interface BurgerProps {
  isMenuOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const Burger = ({ isMenuOpen, onClick, className }: BurgerProps) => {
  return (
    <button
      aria-expanded={isMenuOpen ? true : false}
      aria-label="menu"
      onClick={onClick}
      className={[styles.burger, isMenuOpen && styles.active, className].join(
        " "
      )}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};
