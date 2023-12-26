export default class ProductResponseDTO {
    constructor(product) {
        this.id = product._id;
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
        this.thumbnail = product.thumbnail;
    }

    static fromModel(product) {
        return new ProductResponseDTO(product);
    }
}
