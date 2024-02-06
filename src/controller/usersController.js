import UsersMongo from '../daos/mongodb/usersDao.js'
import UserService from '../service/usersService.js'
import { HttpResponse, errorsDictionary } from '../../utils/httpResponse.js' 
const httpResponse = new HttpResponse()
const userService = new UserService()
const usersMongo = new UsersMongo()

export const registerResponse = async(req, res, next) => {
    try {
        res.redirect('/logs/login')
    } catch(error) {
        next(error)
    }
}

export const loginResponse = async(req, res, next) => {
    try {
        res.redirect('/mongo/products')
    } catch(error) {
        next(error)
    }
}

export const getInfo = async(req, res, next) => {
    try {
        const { id } = req.params
        const userInfo = await userService.getInfo(id)
        if(!userInfo){
            return httpResponse.NotFound(res, errorsDictionary.FIND)
        } else {
            return httpResponse.Ok(res, userInfo)
        }
    } catch (error) {
        next(error.message);
      }
}