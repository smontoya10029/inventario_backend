const {  df_lsmarcas } = require ('../define')
const getLsmarcasMdl = async () => {
   try {
       const results = await df_lsmarcas.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsmarcasMdl
}