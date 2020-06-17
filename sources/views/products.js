// views/products.js
import BaseDatatable from "views/basedatatable";
import data from "models/records"; //data collection
export default class ProductsView extends BaseDatatable {
    constructor(app, name){
        super(app, name, {
            columns:[
                {id:"id",header:""},
                {id:"product",header:"Product"},
                {id:"stock",header:"In stock"}
            ]
        });
    }
    init(view){
        view.parse(data);
    }
}