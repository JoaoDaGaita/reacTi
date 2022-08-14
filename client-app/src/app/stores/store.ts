import { createContext, useContext } from "react";
import ActicityStore from "./activityStore";

interface Store {
    activityStore: ActicityStore
}

export const store: Store = {
    activityStore: new ActicityStore()
}

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext);
}