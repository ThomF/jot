import { appState } from "../AppState.js"
import { Jot } from "../Models/Jot.js";
import { jotsService } from "../Services/JotsService.js";

import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawJotNotes(){
    let jotNotes = appState.jots
    let template = ''
    jotNotes.forEach(c => template += c.JotFileTemplate)
    setHTML('allJotNotes', template)
}

function _drawJotNote(){
    let jotNote = appState.activeJot
    setHTML('take-notes', jotNote.JotNoteTemplate)
}


export class JotsController{


    constructor(){
        _drawJotNotes()
        appState.on('jots', _drawJotNotes)
        appState.on('activeJot', _drawJotNote)
    }


    handleJotSubmit(){
        try {
            window.event.preventDefault()

            const form = window.event.target
            const formData = getFormData(form)
            console.log(formData, 'this is a new jot')
            jotsService.createJot(formData)

            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error.message)
            console.log(error)
        }
    }

    setActiveJot(jotId){
        console.log('set active')
        try {
            jotsService.setActiveJot(jotId)
        } catch (error) {
            console.log('failed to set active jot')            
        }
    }




    
}