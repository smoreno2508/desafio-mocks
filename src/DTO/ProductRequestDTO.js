import { ValidationError } from "../errors/CustomError.js";
export default class ProductRequestDTO {
    constructor(product) {
        this.title = product.title;
        this.status = product.status;
        this.category = product.category;
        this.description = product.description;
        this.price = product.price;
        this.thumbnail = product.thumbnail;
        this.code = product.code;
        this.stock = product.stock;
        this.validate();
    }

    validate() {
        const requiredFields = ['title', 'status', 'category', 'description', 'price', 'thumbnail', 'code', 'stock'];
        const missingFields = requiredFields.filter(field => this[field] === undefined || this[field] === null);

        if (missingFields.length > 0) {
            throw new ValidationError(`Missing required fields: ${missingFields.join(', ')}`);
        }
       
    }

    static fromRequest(product) {
        return new ProductRequestDTO(product);
    }
    
}