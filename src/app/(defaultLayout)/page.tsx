import Banner from "@/components/home/BannerSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import DeliverySystemSection from "@/components/home/DeliverySystemSection";
import TutorialSection from "@/components/home/TutorialSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TutorialSection />
      <DeliverySystemSection />
      <ChooseUsSection />
    </div>
  );
};

export default HomePage;
