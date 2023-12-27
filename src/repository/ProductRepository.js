import { ProductModel } from "../models/ProductModel.js";
import { validateObjectId } from "../helpers/utils.js";

class ProductRepository {
    
    constructor(ProductModel) {
        this.productModel = ProductModel;
    }

    async getAll(){
        return await this.productModel.find();  
    }

    async findById(id){
        await validateObjectId(id);
        return await this.productModel.findById(id);
    }

    async create(product){
        return await this.productModel.create(product);
    }

    async update(id, product){
        await validateObjectId(id);
        return await this.productModel.findByIdAndUpdate(id, product);
    }

    async delete(id){
        await validateObjectId(id);
        return await this.productModel.findByIdAndDelete(id);
    }
}

export const productRepository = new ProductRepository(ProductModel);