import TransportCategorySection from "@/components/home/TransportCategorySection";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <TransportCategorySection />
      </main>
    </div>
  );
};

export default AboutUs;
