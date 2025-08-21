"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import Faq from "@/components/mainLayout/contact/Faq";
import ContactForm from "@/components/mainLayout/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <main className="container mx-auto py-8 px-4">
        <ContactForm />
        <Faq />
      </main>
    </div>
  );
};

export default Contact;
