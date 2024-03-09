const {  getLsestadoMdl } = require('../../models')
const getLsEstadoCtr = async (req, res) => {
   try {
        const results = await getLsestadoMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsEstadoCtr
}