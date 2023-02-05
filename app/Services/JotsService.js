import { Jot } from "../Models/Jot.js";
import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { Pop } from "../Utils/Pop.js";
// @ts-ignore
import { setHTML, setText } from "../Utils/Writer.js";

class JotsService{

    counter() {
        let jotCount = appState.jots.length;
        setText('numberJot', jotCount)
    }

    updateJot(updatedBody) {
        console.log("almost saved")
        let activeJotNote = appState.activeJot
        // @ts-ignore
        let str = activeJotNote.body
        // @ts-ignore
    
        // @ts-ignore
        activeJotNote.body = updatedBody
        // @ts-ignore
        activeJotNote.upTime = new Date().toLocaleTimeString('en-US') 
        // @ts-ignore
        activeJotNote.upDate = new Date().toLocaleDateString('en-US')
        // @ts-ignore
        activeJotNote.character = updatedBody.length
        // @ts-ignore

        let updatedBodyNoLineBreaks = updatedBody.replace("\n", " ").trim()

        activeJotNote.word = updatedBodyNoLineBreaks.split(" ").length

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
        // @ts-ignore
        Pop.toast("success", "top", 3000)
        appState.jots.push(newJot)
        saveState('jots', appState.jots)
        appState.emit('jots')
    }


    deleteNote(jotId){
        let note = appState.jots.findIndex(c => c.id == jotId)

        if(note == -1){
            throw new Error("how did we get here")
        }

        appState.jots.splice(note, 1)
        saveState('jots', appState.jots)
        appState.emit('jots')
    }



}








export const jotsService = new JotsService()