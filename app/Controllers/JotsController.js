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


export class JotsController{


    constructor(){
        _drawJotNotes()
        appState.on('jots', _drawJotNotes)
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




    
}