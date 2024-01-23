import Hero from "@/components/hero";
import relImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={relImg}
      imgAlt="Welding"
      title="Super high reliability hosting"
    />
  );
}
