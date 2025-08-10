import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SubHeader from "@/components/common/SubHeader";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <SubHeader />
    <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
