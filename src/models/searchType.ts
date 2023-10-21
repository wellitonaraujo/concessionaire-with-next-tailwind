import { ReactNode } from "react";

export interface SearchContextType {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchProviderProps {
  children: ReactNode;
}
