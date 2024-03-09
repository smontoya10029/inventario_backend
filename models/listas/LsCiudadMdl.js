const {  df_lsciudad } = require ('../define')
const getLsCiudadMdl = async () => {
   try {
       const results = await df_lsciudad.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsCiudadMdl
}