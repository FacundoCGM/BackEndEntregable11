import { dirname } from "path"
import { fileURLToPath } from "url"

import { fakerES as faker } from "@faker-js/faker"


export const __dirname = dirname(fileURLToPath(import.meta.url))


import { hashSync, genSaltSync, compareSync } from "bcrypt"

export const hashPass = (password) => {
    return hashSync(password, genSaltSync(10))
}

export const validPassword = (password, user) => {
    return compareSync(password, user.password)
}

export const createResponse = (res, statusCode, data) => {
    return res.status(statusCode).json({ data })
}

export const productsMock = () => {
    return {
        product: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        stock: faker.number.int({ max: 100 })
    }
}