const {  getLsdisponibilidadMdl } = require('../../models')
const getLsDisponibilidadCtr = async (req, res) => {
   try {
        const results = await getLsdisponibilidadMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsDisponibilidadCtr
}