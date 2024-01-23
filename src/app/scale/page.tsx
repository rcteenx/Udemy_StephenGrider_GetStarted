import Hero from "@/components/hero";
import scaImg from "public/scale.jpg";

export default function Home() {
  return (
    <Hero
      imgData={scaImg}
      imgAlt="Steel Factory"
      title="Scale your app to infinity"
    />
  );
}
