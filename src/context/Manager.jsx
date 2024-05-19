import { createContext, useState } from "react";

export const ManagerContextProvider = createContext({
  isDark: false
});

function ContextManager({ children }) {
  const [isDark, setMode] = useState(null);

  return (
    <ManagerContextProvider.Provider value={{ isDark, setMode }}>
      {children}
    </ManagerContextProvider.Provider>
  );
}

export default ContextManager;
