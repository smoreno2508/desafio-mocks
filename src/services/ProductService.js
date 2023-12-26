import ProductRequestDTO from "../DTO/ProductRequestDTO.js";
import { productRepository } from "../repository/ProductRepository.js";
import { NotFoundError } from "../errors/CustomError.js";

class ProductService{

    constructor(productRepository){
        this.productRepository = productRepository;
    }

    async getAll(){
        return await this.productRepository.getAll();
    }

    async create(product){
        const productDTO = ProductRequestDTO.fromRequest(product);
        return await this.productRepository.create(productDTO);
    }

    async getById(id){
        
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new NotFoundError(`Product with id ${id} not found`);
        }

        return product;
    }

    async update(id, data){
        await this.getById(id);
        return await this.productRepository.update(id, data);
    }

    async delete(id){
        await this.getById(id);
        return await this.productRepository.delete(id);
    }

}

export const productService = new ProductService(productRepository);
