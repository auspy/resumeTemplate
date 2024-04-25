import Image from "next/image";
import { memo } from "react";

const LightRays = ({ style, opacity = 0.3, className, imgClassName }) => {
  return (
    <>
      {/* LIGHT RAYS */}
      <div
        className={className}
        style={{
          zIndex: -100,
          ...style,
        }}
      >
        <Image
          priority
          className={imgClassName}
          id="lightRays"
          src={"/homeHeroBg.png"}
          alt="home background"
          style={{ maxHeight: style ? "none" : 840, opacity }}
          fill
        />
      </div>
    </>
  );
};

export default memo(LightRays);
