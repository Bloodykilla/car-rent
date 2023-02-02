import styles from "./styles.module.scss";
interface GlobeIconProps {
  color: "white" | "black";
  className?: string;
}

export const GlobeIcon = ({ color = "black", className }: GlobeIconProps) => {
  return (
    <svg
      className={[styles.container, styles[color], className].join(" ")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25Z"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M11.9999 2.25C9.27788 2.25 6.71851 6.61547 6.71851 12C6.71851 17.3845 9.27788 21.75 11.9999 21.75C14.7219 21.75 17.2813 17.3845 17.2813 12C17.2813 6.61547 14.7219 2.25 11.9999 2.25Z"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M5.49976 5.49988C7.29226 6.77253 9.54882 7.53144 11.9999 7.53144C14.451 7.53144 16.7076 6.77253 18.5001 5.49988M18.5001 18.5002C16.7076 17.2275 14.451 16.4686 11.9999 16.4686C9.54882 16.4686 7.29226 17.2275 5.49976 18.5002"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.25V21.75M21.75 12H2.25"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
