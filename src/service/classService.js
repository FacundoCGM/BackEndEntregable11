export default class Services {
    constructor(dao) {
      this.dao = dao
    }
  
    getAll = async () => {
      try {
        return this.dao.getAll()
      } catch (error) {
        throw new Error (error)
      }
    }
  
    findById = async (id) => {
      try {
        const item = await this.dao.findById(id)
        if (!item) return false
        else return item
      } catch (error) {
        throw new Error (error)
      }
    }
  
    create = async (obj) => {
      try {
        const newItem = await this.dao.create(obj)
        if (!newItem) return false
        else return newItem
      } catch (error) {
        throw new Error (error)
      }
    }
  
    update = async (id, obj) => {
      try {
        const item = await this.dao.findById(id)
        if (item) return false
        else return await this.dao.update(id, obj)
      } catch (error) {
        throw new Error (error)
      }
    }
  
    delete = async (id) => {
      try {
        return await this.dao.delete(id)
      } catch (error) {
        throw new Error (error)
      }
    }
  }