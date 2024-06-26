import { FunctionComponent } from "react";

const Button = ({
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
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-full px-4 py-2 text-center text-white font-bold text-sm ${className} 
    ${
      isActive
        ? "bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80"
        : "text-zinc-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80"
    }
    `}
        disabled={isDisabled}
      >
        {showIcon && Icon && (
          <Icon width={20} height={20} className="mr-2 inline" />
        )}
        {title}
      </button>
    </>
  );
};
export default Button;
