import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="relative">
      <div>
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
          className="font-serif text-7xl"
        />
      </div>
    </div>
  );
}
