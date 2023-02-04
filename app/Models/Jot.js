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

    // SECTION templates 

    get JotFileTemplate(){
        return /** HTML*/`
        <div class="row" onclick="app.JotsController.setActiveJot('${this.id}')">
        <div class="col-6">
            <h2>${this.title}</h2>
        </div>
        <div class="col-6">
        <h4 class="mdi mdi-file" style="color: ${this.color}"></h4>
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
            <p id="updated"></p>
        </div>
        <div class="col-7 p-4">
        <textarea name="body" id="text" cols="74" rows="20" onblur="app.JotsController.updatedJot()">${this.body}</textarea></div>
        </div>
        <div class="col-2 mdi mdi-delete pt-4">DELETE</div>
        </div>
        `
    }

    get updatedTime(){
        return`
        Updated At: ${this.upDate}, ${this.upTime}
        `
    }

}