import {JetView} from "webix-jet";
export default class Toolbar extends JetView {
    config(){
        return {
            view:"button", value:"Click me",
            click:() => this.doClick("Clicked")
        };
    }
    init(){
        this._counter = 0;
    }
    doClick(message){
        this._counter++;
        webix.message(message+" "+this._counter);
    }
}