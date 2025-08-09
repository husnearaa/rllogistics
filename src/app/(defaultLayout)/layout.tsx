import Navbar from "@/components/common/Navbar";
import SubHeader from "@/components/common/SubHeader";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <SubHeader />
    <Navbar />
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
