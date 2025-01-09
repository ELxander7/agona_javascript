class Product {
    constructor({ id, companyId, name, description, reviewIds, reviews = [] }) {
        this.id = id;
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.reviewIds = reviewIds;
        this.reviews = reviews;
    }
}

export default Product;