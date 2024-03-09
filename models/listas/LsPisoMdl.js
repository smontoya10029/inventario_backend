const {  df_lspiso } = require ('../define')
const getLspisoMdl = async () => {
   try {
       const results = await df_lspiso.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLspisoMdl
}