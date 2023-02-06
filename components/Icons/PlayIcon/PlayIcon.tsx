import styles from "./styles.module.scss";
interface PlayIconProps {}

export const PlayIcon = ({}: PlayIconProps) => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="66"
        cy="66"
        r="64"
        fill="white"
        fillOpacity="0.2"
        stroke="white"
        strokeWidth="2.13"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.0667 66L52.6666 90L52.6666 42L91.0667 66Z"
        fill="white"
      />
    </svg>
  );
};
