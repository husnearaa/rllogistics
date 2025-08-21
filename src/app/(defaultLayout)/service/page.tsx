import WorkProcessSection from "@/components/home/WorkProcessSection";
import TransportationServices from "@/components/mainLayout/service/TransportationServices";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <TransportationServices />
        <WorkProcessSection />
      </main>
    </div>
  );
};

export default ServicePage;
