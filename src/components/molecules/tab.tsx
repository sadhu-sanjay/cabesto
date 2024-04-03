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
      className={`w-full gap-8 justify-center flex shadow-sm py-8 dark:bg-gray-700 ${className}
    `}
    >
      {items.map((tab, index) => (
        <TabButton
          key={index}
          isActive={activeTab.value === tab.value}
          title={tab.label }
          onClick={() => onChange(tab)}
        />
      ))}
    </div>
  );
};

export default Tabs;
