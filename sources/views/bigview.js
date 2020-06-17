// views/bigview.js
import {JetView} from "webix-jet";
import MyView from "views/myview";

export default class BigView extends JetView{
    config(){
    	return {
        rows:[
            {subview:true},
            { template:"BigView text" }
    	]}
    } 
}