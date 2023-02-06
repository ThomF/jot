import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Jot{
    constructor(data){
        this.title = data.title
        this.id = generateId()
        this.time = data.time || new Date().toLocaleTimeString('en-US')
        this.date = data.date || new Date().toLocaleDateString('en-US')
        this.upTime = data.upTime || ""
        this.upDate =  data.upDate || ""
        this.body = data.body || ''
        this.color = data.color
        this.word = data.word || 0
        this.character = data.character || ''
        
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
        <div class="row rounded border bg-Jot">
            <div class="col-3 pt-4">
                <h1 class="mdi mdi-file" style="color: ${this.color}">${this.title}</h1>
                <p class="fawnt">Created At: ${this.date}, ${this.time}</p>
                <p class="fawnt">Updated At: ${this.upDate}, ${this.upTime}</p></p>
                <p class="fawnt">Word Count: ${this.word}</p>
                <p class="fawnt">Character Count: ${this.character}</p>
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
    get landingPageTemplate(){
        return`
        <div class="col-12">
        <div class="row rounded blink" id="homeScreen">
            <div class="col-12">
            <img class="imgJot" src="assets/img/signature (6).png" alt="">
            </div>
        </div>
        </div>
        `
    }


    
}

