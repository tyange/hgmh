import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/4 left-5">
        <TypeAnimation
          sequence={[
            "한국문학의",
            500,
            "한국문학의 최전선",
            500,
            "한국문학의 최전선에서",
          ]}
          wrapper="span"
          cursor={true}
          className="inline-block font-serif break-words text-7xl"
        />
      </div>
    </div>
  );
}
