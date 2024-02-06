import TicketMongo from "../daos/mongodb/ticketDao.js"
import Services from "./classService.js"
import { v4 as uuidv4 } from 'uuid'
import UsersMongo from "../daos/mongodb/usersDao.js"
import CartMongo from "../daos/mongodb/cartDao.js"
import ProductsMongo from "../daos/mongodb/productsDao.js"

const ticketMongo = new TicketMongo()
const usersMongo = new UsersMongo()
const cartMongo = new CartMongo()
const productsMongo = new ProductsMongo()

export default class TicketService extends Services {
    constructor() {
        super(ticketMongo)
    }

    async generateTicket (uid, cid) {
        try {
            const user = await usersMongo.findById(uid)
            if(!user) {
                return false;
            }

            console.log(user)
            
            const cart = await cartMongo.findById(cid)
            if(!cart) {
                return false;
            }

            console.log(cart)

            let amountAcc = 0

            console.log(cart.products)

            for (const p of cart.products) {
                const idProd = p.product._id.toString()
                const prodFromDB = await productsMongo.findById(idProd)
                if(p.quantity <= prodFromDB.stock){
                  const amount = p.quantity * prodFromDB.price
                  amountAcc += amount
                }
            }

            const ticket = await ticketMongo.create({
                code: uuidv4(),
                purchase_datetime: new Date().toLocaleString(),
                amount: amountAcc,
                purchaser: user.email
            })

            cartMongo.cleanCart(cid)
            return ticket
        } catch (error) {
            throw new Error(error);
        }
    } 
}