import { createContext, type RefObject } from "react";

export const StageContext = createContext<RefObject<HTMLDivElement | null>>({ current: null });
