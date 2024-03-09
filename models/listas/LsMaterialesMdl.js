const {  df_lsmateriales } = require ('../define')
const getLsmaterialesMdl = async () => {
   try {
       const results = await df_lsmateriales.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsmaterialesMdl
}