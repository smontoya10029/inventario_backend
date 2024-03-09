const {  df_lspais } = require ('../define')
const getLspaisMdl = async () => {
   try {
       const results = await df_lspais.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLspaisMdl
}