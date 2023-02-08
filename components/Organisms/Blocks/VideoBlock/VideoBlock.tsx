import { PlayIcon } from "@/components/Icons/PlayIcon/PlayIcon";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface VideoBlockProps {}

export const VideoBlock = ({}: VideoBlockProps) => {
  return (
    <div className={styles.container}>
      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=_4yaQf5AHHY&t=1s&ab_channel=CaretaRentacar"
        width="100%"
        light={"/images/player.webp"}
        height={"100%"}
        playIcon={<PlayIcon />}
      />
    </div>
  );
};
