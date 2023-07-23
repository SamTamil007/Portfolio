import Image from "next/image";
// import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://draft.spline.design/aB9-Cy6-k2Hhrfav/scene.splinecode"
          className="translate-z-0 w-full h-full"
        />
        {/* <Image
            src="/avatar.png"
            width={737}
            height={678}
            alt="Avatar"
            className="translate-z-0 w-full h-full"
          /> */}
      </Suspense>
    </div>
  );
};

export default Avatar;
