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
        return
        `
        <div>${this.title}</div>
        `
    }

    get JotNoteTemplate(){
        return
        `

        `
    }

}