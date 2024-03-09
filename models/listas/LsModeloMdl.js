const {  df_lsmodelo } = require ('../define')
const getLsmodeloMdl = async () => {
   try {
       const results = await df_lsmodelo.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsmodeloMdl
}