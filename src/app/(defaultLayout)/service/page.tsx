import TransportationServices from '@/components/pages/service/TransportationServices';
import { PageHeader } from '@/components/shared/PageHeader';
import React from 'react';

const ServicePage = () => {
    return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <TransportationServices />
               </main>   
        </div>
    );
};

export default ServicePage;