const { df_lsTipoActivo } = require ('../define/TipoActivo')

const getPisosMdl = async () => {
   try {
       const results = await df_lsTipoActivo.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getPisosMdl
}