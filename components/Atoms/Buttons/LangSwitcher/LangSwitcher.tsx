import { GlobeIcon } from "@/components/Icons/GlobeIcon/GlobeIcon";
import styles from "./styles.module.scss";

interface LangSwitcherProps {
  onClick: () => void;
  className?: string;
}

export const LangSwitcher = ({ onClick, className }: LangSwitcherProps) => {
  return (
    <div
      onClick={() => onClick()}
      className={[styles.lang, className].join(" ")}
    >
      <GlobeIcon color="black" />
      <span>En</span>
    </div>
  );
};
