// views/details.js
import {JetView} from "webix-jet";
export default class DetailsView extends JetView {
       config(){
        return {
            rows: [
                { template:"Details", type:"header" },
                { $subview:true }
            ]
        };
    }
}