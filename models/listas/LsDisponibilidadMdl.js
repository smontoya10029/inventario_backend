const {  df_lsdisponibilidad } = require ('../define')
const getLsdisponibilidadMdl = async () => {
   try {
       const results = await df_lsdisponibilidad.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsdisponibilidadMdl
}