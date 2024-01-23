import Hero from "@/components/hero";
import perImg from "public/performance.jpg";

export default function Performance() {
  return (
    <Hero
      imgData={perImg}
      imgAlt="Welding"
      title="We serve high performance applications"
    />
  );
}
