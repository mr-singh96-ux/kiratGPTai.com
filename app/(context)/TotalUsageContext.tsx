// TotalUsageContext.ts
import { createContext, useState, ReactNode } from "react";

// Define the type for the context state
type TotalUsageContextType = {
  totalUsage: number;
  setTotalUsage: (usage: number) => void;
};

// Create the context with a default value
export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0, 
  setTotalUsage: () => {},  // Default empty function for setTotalUsage
});

export const TotalUsageProvider = ({ children }: { children: ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};
