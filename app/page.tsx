import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

const Home = async () => {
  return (
    <div className="">
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
}

export default Home;
