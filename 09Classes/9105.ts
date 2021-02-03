// 9105.ts
import React from "react";
type EventObject<T = HTMLElement> = React.SyntheticEvent<T>; // 1
type EventFunc<T = HTMLElement> = (e: EventObject<T>) => void; // 2
