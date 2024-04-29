"use client";

import lottie, {
  AnimationConfigWithData,
  AnimationConfigWithPath,
  AnimationItem,
} from "lottie-web";
import { RefObject, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export function useLottie(
  ref: RefObject<HTMLElement>,
  params: AnimationConfigWithPath | AnimationConfigWithData
): AnimationItem | null {
  const [animation, setAnimation] = useState<AnimationItem | null>(null);

  useDeepCompareEffect(() => {
    if (ref.current) {
      const instance = lottie.loadAnimation({
        ...params,
        container: ref.current,
      });

      setAnimation(instance);

      return () => {
        instance.destroy();
        setAnimation(null);
      };
    }
  }, [ref, params]);

  return animation;
}
