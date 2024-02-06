import ProductsMongo from "../daos/mongodb/productsDao.js"
import Services from "./classService.js"
import { productsMock } from "../utils.js"
const productsMongo = new ProductsMongo()


export default class ProductService extends Services {
    constructor() {
        super(productsMongo)
    }

    async getProducts(page, limit, category, sort) {
        try {
            return await productsMongo.getProducts(page, limit, category, sort)
        } catch(error) {
            throw new Error (error)
        }
    }

    async updateProduct(pid, obj) {
        try {
            return await productsMongo.updateProduct(pid, obj)
        } catch(error) {
            throw new Error (error)
        }
    }

    async productsMock() {
        try {
            const products = []
            for (let i = 0; i < 100; i++) {
                const product = productsMock()
                products.push(product)
            }
            return products
        } catch(error) {
            throw new Error (error)
        }
    }
}