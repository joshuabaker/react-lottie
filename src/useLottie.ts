"use client";

import lottie, {
  AnimationItem,
  AnimationConfigWithPath,
  AnimationConfigWithData,
} from "lottie-web";
import { useEffect, useState, RefObject } from "react";

export function useLottie(
  ref: RefObject<HTMLElement>,
  params: AnimationConfigWithPath | AnimationConfigWithData
): AnimationItem | null {
  const [animation, setAnimation] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (ref.current) {
      const instance = lottie.loadAnimation({
        container: ref.current,
        ...params,
      });

      setAnimation(instance);

      return () => {
        instance.destroy();
        setAnimation(null);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return animation;
}
