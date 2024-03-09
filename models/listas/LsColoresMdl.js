const {  df_lscolores } = require ('../define')
const getLscoloresMdl = async () => {
   try {
       const results = await df_lscolores.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLscoloresMdl
}