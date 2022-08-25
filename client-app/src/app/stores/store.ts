import { createContext, useContext } from "react";
import ActicityStore from "./activityStore";
import CommonStore from "./CommonStore";

interface Store {
    activityStore: ActicityStore;
    commonStore: CommonStore;
}

export const store: Store = {
    activityStore: new ActicityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext);
}