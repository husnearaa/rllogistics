import Banner from "@/components/home/BannerSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import DeliverySystemSection from "@/components/home/DeliverySystemSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TutorialSection from "@/components/home/TutorialSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TutorialSection />
      <DeliverySystemSection />
      <ChooseUsSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
