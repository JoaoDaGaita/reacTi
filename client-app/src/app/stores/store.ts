import { createContext, useContext } from "react";
import ActicityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActicityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
}

export const store: Store = {
    activityStore: new ActicityStore(),
    commonStore: new CommonStore(),
    userStore:  new UserStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext);
}