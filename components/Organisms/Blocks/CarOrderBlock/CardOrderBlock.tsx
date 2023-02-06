import { useRef } from "react";

interface CardOrderBlockProps {}

export const CardOrderBlock = ({}: CardOrderBlockProps) => {
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      src="https://rentsyst.com/settings/iframe-constructor/?token=43do_LD_OSAtVhok0-z3B5P8dN_eU23s&id=3657"
      style={{ border: 0, height: "100vh", width: "100%" }}
    />
    // <IframeResizer
    //   onLoad={() =>
    //     console.log(
    //       "Height: ",
    //       ref?.current?.contentWindow?.document?.body?.scrollHeight
    //     )
    //   }
    //   heightCalculationMethod={"documentElementScroll"}
    //   forwardRef={ref}
    //   style={{
    //     minWidth: "100%",
    //     border: "none",
    //     minHeight: "100vh",
    //   }}
    //   src="https://rentsyst.com/settings/iframe-constructor/?token=43do_LD_OSAtVhok0-z3B5P8dN_eU23s&id=3657"
    // />
  );
};
