import React from "react";
import type { TrackDetails } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";
import Banner from "../Banner";
import { bannersData } from "./data";

export default function Carrousel() {
  const [details, setDetails] = React.useState<TrackDetails | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 2,
  });

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div ref={sliderRef} className="keen-slider zoom-out">
      {bannersData.map((component, key) => (
        <div key={key} className="keen-slider__slide zoom-out__slide">
          <div style={scaleStyle(key)}>
            <Banner {...component} />
          </div>
        </div>
      ))}
    </div>
  );
}
