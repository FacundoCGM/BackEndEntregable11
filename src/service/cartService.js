import CartMongo from "../daos/mongodb/cartDao.js"
const cartMongo = new CartMongo()

export const newCart = async() => {
    try {
        return await cartMongo.newCart()
    } catch (error) {
        throw new Error (error)
    }
}

export const saveToCart = async(cid, pid) => {
    try{
        return await cartMongo.saveToCart(cid, pid)
    } catch (error) {
        throw new Error (error)
    }
}

export const cleanCart = async(cid) => {
    try {
        return await cartMongo.cleanCart(cid)
    } catch (error) {
        throw new Error (error)
    }
}

export const deleteOneProduct = async(cid, pid) => {
    try {
        return await cartMongo.deleteOneProduct(cid, pid)
    } catch (error) {
        throw new Error (error)
    }
}

export const updateQuantity = async(cid, pid, quantity) => {
    try {
        return await cartMongo.updateQuantity(cid, pid, quantity)
    } catch (error) {
        throw new Error (error)
    }
}

export const newProductsArrangement = async(cid, productsArrangement) => {
    try {
        return await cartMongo.newProductsArrangement(cid,productsArrangement)
    } catch (error) {
        throw new Error (error)
    }
}

export const getCarts = async() => {
    try {
        return await cartMongo.getCarts()
    } catch (error) {
        throw new Error (error)
    }
}