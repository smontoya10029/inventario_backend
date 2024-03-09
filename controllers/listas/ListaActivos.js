const { df_lsActivo } = require ('../define/LsActivo')

const getLsActvio = async () => {
   try {
       const results = await df_lsActivo.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsActvio
}