'use client'
import { useState } from "react";
import Tabs from "~/components/molecules/tab";
import { UploadIcon } from "~/icons/upload-icon";
import { TabItem } from "~/models/types";


export default function Page() {
  const items: Array<TabItem> = [
    { label: "GENERAL", value: "ongoing", count: 0 },
    { label: "PAGE D'ACCUEIL", value: "approved", count: 0 },
    { label: "CONCOURS", value: "rejected", count: 0 },
    { label: "SONDAGES", value: "draft", count: 0 },
  ];

  const [activeTab, setActiveTab] = useState<TabItem>(items[0]);

  return (
    <div className="w-full h-full">
      <Tabs
        items={items}
        className=""
        activeTab={activeTab}
        onChange={(item: TabItem) => {
          setActiveTab(item);
        }}
      />
      <div className="w-full border-2 border-zinc-200 rounded">
        <h1 className="border mt-4 mx-4 border-zinc-200 rounded p-2 ">
          Telecharge Votre Logo*
        </h1>
        <div className="m-4 justify-center grid border py-16 gap-4">
          <UploadIcon className="w-8 h-8" />
          <div>Sanjay</div>
          <div>Goswami</div>
        </div>
      </div>
    </div>
  );
}