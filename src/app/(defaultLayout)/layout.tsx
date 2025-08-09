import Navbar from "@/components/common/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
