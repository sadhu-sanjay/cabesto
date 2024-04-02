import TabButton from "~/components/atoms/tab-button"
import { TabItem } from "~/models/types"


type TabsProps = {
  items: TabItem[];
  activeTab: TabItem;
  className?: string;
  onChange: (item: TabItem) => void;
};

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  className,
  onChange,
}) => {
  return (
    <div
      className={`tabs flex items-center gap-1 rounded-4px  shadow-sm px-1.5 py-1 dark:bg-gray-700 ${className}
    `}
    >
      {items.map((tab, index) => (
        <TabButton
          key={index}
          isActive={activeTab.value === tab.value}
          title={tab.label + " " + "(" + tab.count + ")"}
          onClick={() => onChange(tab)}
        />
      ))}
    </div>
  );
};

export default Tabs;
