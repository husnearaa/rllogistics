import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShipmentForm from "./ShipmentForm";

const ShipmentInfo = () => {
  return (
    <div>
      <div className="mt-12">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Are you interested to fill-up shipment information?
        </h3>
        <div className="pt-8 border-t border-[#57595C]">
          <div className="">
            <Tabs defaultValue="Shipment">
              <TabsList className=" mb-6 gap-6">
                <TabsTrigger
                  value="Shipment"
                  className="rounded-lg border-2 md:px-16 px-6 py-5 data-[state=active]:bg-primary data-[state=active]:text-white text-primary data-[state=active]:border-primary border-primary"
                >
                  Yes I want
                </TabsTrigger>
                <TabsTrigger
                  value="GenerateLink"
                  className="rounded-lg border-2 md:px-16 px-6 py-5 data-[state=active]:bg-primary data-[state=active]:text-white text-primary data-[state=active]:border-primary border-primary"
                >
                  Generate Link
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Shipment">
                <div className="text-sm text-gray-600 w-full  text-justify lg:text-start">
                  <ShipmentForm />
                </div>
              </TabsContent>
              <TabsContent value="GenerateLink">
                <div className="grid md:grid-cols-2 gap-8">
                  <h1>Generate Link</h1>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentInfo;
