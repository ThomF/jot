import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Jot{
    constructor(data){
        this.title = data.title
        this.id = generateId()
        this.date = data.date
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
        <div class="col-6" style="color: ${this.color}">
        <p class="mdi mdi-file" ></p>
        </div>
        </div>
        `
    }

    get JotNoteTemplate(){
        return/** HTML*/`
        <div>
        ${this.title}
        </div>
        `
    }

}