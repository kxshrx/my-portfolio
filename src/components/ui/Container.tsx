// src/components/ui/Container.tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  variant?: 'default' | 'wide' | 'narrow' | 'full';
  className?: string;
};

const containerVariants = {
  default: "max-w-[844px]",
  wide: "max-w-6xl", 
  narrow: "max-w-2xl",
  full: "max-w-full"
};

const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'default',
  className = ''
}) => (
  <div className={`${containerVariants[variant]} mx-auto px-4 ${className}`}>
    {children}
  </div>
);

export default Container;
