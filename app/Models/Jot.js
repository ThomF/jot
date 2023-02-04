import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Jot{
    constructor(data){
        this.title = data.title
        this.id = generateId()
        this.time = data.time || new Date().toLocaleTimeString('en-US')
        this.date = data.date || new Date().toLocaleDateString('en-US')
        this.upTime = data.upTime || new Date().toLocaleTimeString('en-US')
        this.upDate = data.upDate || new Date().toLocaleDateString('en-US')
        this.body = data.body || ''
        this.color = data.color
    }

    counter = {
        jots: 0
    }

    // SECTION templates 

    get JotFileTemplate(){
        return /** HTML*/`
        <div class="row" onclick="app.JotsController.setActiveJot('${this.id}')">
        <div class="col-6 d-flex">
            <h2>${this.title}</h2>
            <h4 class="mdi mdi-file" style="color: ${this.color}"></h4>
        </div>
        <div class="col-6">
        
        </div>
        </div>
        `
    }

    get JotNoteTemplate(){
        return/** HTML*/`
        <div class="row rounded border border-${this.color}">
            <div class="col-3 pt-4">
                <h1 class="mdi mdi-file" style="color: ${this.color}">${this.title}</h1>
                <p>Created At: ${this.date}, ${this.time}</p>
                <p>Updated At:<p id="updated"></p></p>
            </div>
            <div class="col-8 p-4">
                <textarea name="body" id="text" cols="74" rows="20" onblur="app.JotsController.updatedJot()">${this.body}</textarea>
            </div>
                <div class="col-1 mdi mdi-delete pt-4" onclick="app.JotsController.deleteNote('${this.id}')">
                    DELETE
                </div>
        </div>
        `
    }

    get updatedTime(){
        return`
        Updated At: ${this.upDate}, ${this.upTime}
        `
    }

}

Jot.counter = 0
