const {  df_lsestado } = require ('../define')
const getLsestadoMdl = async () => {
   try {
       const results = await df_lsestado.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsestadoMdl
}