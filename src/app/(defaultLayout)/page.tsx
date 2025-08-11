import Banner from "@/components/home/BannerSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import CountUpSection from "@/components/home/CountUpSection";
import DeliverySystemSection from "@/components/home/DeliverySystemSection";
import ExtraSection from "@/components/home/ExtraSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TransportCategorySection from "@/components/home/TransportCategorySection";
import TutorialSection from "@/components/home/TutorialSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TutorialSection />
      <DeliverySystemSection />
      <TransportCategorySection />
      <CountUpSection />
      <ProjectsSection />
      <WorkProcessSection />
      <ChooseUsSection />
      <TestimonialsSection />
      <ExtraSection />
    </div>
  );
};

export default HomePage;
