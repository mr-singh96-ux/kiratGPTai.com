// app/(context)/UpdateCreditUsageContext.tsx

import { createContext, useState, ReactNode } from "react";

// Define the type for the context state
type UpdateCreditUsageContextType = {
  updateCreditUsage: boolean;
  setUpdateCreditUsage: (update: boolean) => void;
};

// Create the context with a default value
export const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType>({
  updateCreditUsage: false,
  setUpdateCreditUsage: () => {},
});

export const UpdateCreditUsageProvider = ({ children }: { children: ReactNode }) => {
  const [updateCreditUsage, setUpdateCreditUsage] = useState<boolean>(false);

  return (
    <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
      {children}
    </UpdateCreditUsageContext.Provider>
  );
};
