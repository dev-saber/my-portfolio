import React, { type ReactNode } from "react";

const Title: React.FC<{
  children: ReactNode;
}> = ({ children }) => (
  <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white mb-6 text-center">
    {children}
  </h1>
);

export default Title;
