"use client";
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
      <main className="grid gap-8">
        {/* upload image component */}
        <div className="w-full shadow-md border-2 border-zinc-200 rounded">
          <h1 className="border text-xl font-extrabold mt-4 mx-4 border-zinc-200 rounded p-4 ">
            Telechargez votre logo*
          </h1>
          <div className="m-4 justify-center items-center flex flex-col py-16 gap-4">
            <UploadIcon className="w-8 h-8" />
            <h1 className="font-semibold border-2 border-zinc-500 p-3 rounded">
              Importer le fichier .png
            </h1>
            <p className="text-sm font-mono text-zinc-400 ">
              Taile recommandee 600X400px
            </p>
          </div>
        </div>
        {/* Navigation Personilazition Compoennt */}
        <div className="w-full shadow-md border-2 p-8 border-zinc-200 rounded grid gap-4">
          <h1 className="border text-xl font-extrabold border-zinc-200 rounded p-4 ">
            Personnalisez la barre de navigation*
          </h1>
          <p className="text-sm font-mono text-zinc-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea reiciendis cumque. Ut ratione quos harum a, cum ipsa qui reiciendis dicta nihil necessitatibus provident assumenda. Sunt laudantium iure minima.
          </p>
          
        </div>
      </main>
    </div>
  );
}
