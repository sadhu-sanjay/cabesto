import { FunctionComponent } from "react";
import Button from "./button";

const TabButton = ({
  title = "Delete",
  className,
  onClick,
  showIcon = true,
  Icon,
  isDisabled = false,
  isActive = true,
}: {
  title: string;
  onClick: () => void;
  className?: string;
  Icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  showIcon?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}) => {
  return <Button className="border-2 border-zinc-600" isActive={isActive} title={title} isDisabled={isDisabled} onClick={onClick} />;
};

export default TabButton;
