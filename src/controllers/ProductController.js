import { productService } from "../services/ProductService.js";
import { productMock } from "../mock/productMock.js";
import { successResponse } from "../helpers/responseMaker.js";
import { builLogger } from "../helpers/logger.js";
import ProductResponseDTO from "../DTO/ProductResponseDTO.js";

const logger = builLogger("ProductController");

const getAll = async (req, res, next) => {
    try {
        const products = await productService.getAll();
        const productDTO = products.map(product => ProductResponseDTO.fromModel(product));
        successResponse(res, "Products retrieved successfully", { productDTO });
        logger.log("getAll: Products retrieved successfully");
    } catch (error) {
        next(error);
        logger.error(`getAll: ${error.message}`);
    }
}

const getById = async (req, res, next) => {
    try {
        const product = await productService.getById(req.params.id);
        const productDTO = ProductResponseDTO.fromModel(product);
        successResponse(res, "Product retrieved successfully", productDTO);
        logger.log("getById: Product retrieved successfully");
    } catch (error) {
        next(error);
        logger.error(`getById: ${error.message}`);
    }
}

const create = async (req, res, next) => {
    try {  
        const product = await productService.create(req.body);
        const productDTO = ProductResponseDTO.fromModel(product);
        successResponse(res, "Product created successfully", productDTO);
        logger.log("create: Product created successfully");
    } catch (error) {
        next(error);
        logger.error(`create: ${error.message}`);
    }
}

const deleteById = async (req, res, next) => {
    try {
        await productService.delete(req.params.id);
        successResponse(res, "Product deleted successfully");
        logger.log("deleteById: Product deleted successfully");
    } catch (error) {
        next(error);
        logger.error(`deleteById: ${error.message}`);
    }
}

const productMocks = async (req, res, next) => {
    try {
        const mockData = productMock();
        successResponse(res, "Product created successfully", mockData);
        logger.log("productMocks: Product created successfully");
    } catch (error) {
        next(error);
        logger.error(`productMocks: ${error.message}`);
    }
}

export {
    getAll,
    getById,
    deleteById,
    create,
    productMocks
}

