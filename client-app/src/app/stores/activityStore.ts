import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Activity } from "../models/activity";

export default class ActicityStore {
    activities: Activity[] = [];
    selectedActivity: Activity | null = null;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial = false;
    
    constructor() {
        makeAutoObservable(this)        
    }

    loadActicities = async () => {
        this.loadingInitial = true;
        try {
            const activities = await axios;
            
        } catch (error) {
            console.log(error);
        }
    }
}