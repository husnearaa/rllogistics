import Banner from "@/components/home/BannerSection";
import DeliverySystemSection from "@/components/home/DeliverySystemSection";
import TutorialSection from "@/components/home/TutorialSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TutorialSection />
      <DeliverySystemSection />
    </div>
  );
};

export default HomePage;
