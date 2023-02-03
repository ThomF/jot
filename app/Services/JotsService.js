import { Jot } from "../Models/Jot.js";
import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { Pop } from "../Utils/Pop.js";

class JotsService{


    setActiveJot(jotId){
        let foundJot = appState.jots.find(c => c.id == jotId)
        console.log(foundJot)
        // @ts-ignore
        appState.activeJot = foundJot
    }

    createJot(formData){
        let newJot = new Jot(formData)
        console.log(newJot, 'adding it!')
        Pop.toast("success")
        appState.jots.push(newJot)
        saveState('allJotNotes', appState.jots)
        appState.emit('jots')
    }






}








export const jotsService = new JotsService()