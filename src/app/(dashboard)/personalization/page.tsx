'use client'
import { useState } from "react";
import Tabs from "~/components/molecules/tab";
import { TabItem } from "~/models/types";


export default function Page() {

    const items: Array<TabItem> = [
        { label: "GENERAL", value: "ongoing", count: 0 },
        { label: "PAGE D'ACCUEIL", value: "approved", count: 0 },
        { label: "CONCOURS", value: "rejected", count: 0 },
        { label: "SONDAGES", value: "draft", count: 0 },
    ];
    
    const [ activeTab, setActiveTab ] = useState<TabItem>(items[0])

    return (<div className="flex-1 bg-red-800 w-full h-full">
        <Tabs
          items={items}
          className="bg-gray-200 "
          activeTab={activeTab}
          onChange={(item: TabItem) => {
            setActiveTab(item);
          }}
        />
    </div>)
}