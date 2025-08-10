import Banner from "@/components/home/BannerSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import DeliverySystemSection from "@/components/home/DeliverySystemSection";
import ExtraSection from "@/components/home/ExtraSection";
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
      <ExtraSection />
    </div>
  );
};

export default HomePage;
