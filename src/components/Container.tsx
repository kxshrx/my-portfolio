// src/components/Container.tsx

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="max-w-3xl mx-auto px-4">
    {children}
  </div>
);

export default Container;
