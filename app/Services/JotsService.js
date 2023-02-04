import { Jot } from "../Models/Jot.js";
import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { Pop } from "../Utils/Pop.js";

class JotsService{

    updateJot(updatedBody) {
        console.log("almost saved")
        let activeJotNote = appState.activeJot

        // @ts-ignore
        activeJotNote.body = updatedBody
        saveState('jots', appState.jots)
        console.log("text updated!", appState.jots)
        appState.emit('activeJot')
    }


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
        saveState('jots', appState.jots)
        appState.emit('jots')
    }






}








export const jotsService = new JotsService()