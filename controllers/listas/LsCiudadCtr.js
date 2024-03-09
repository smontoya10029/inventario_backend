const {  getLsCiudadMdl } = require('../../models')
const getLsCiudadCtr = async (req, res) => {
   try {
        const results = await getLsCiudadMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsCiudadCtr
}