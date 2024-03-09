const {  getLsActivoMdl } = require('../../models')
const getLsActivoCtr = async (req, res) => {
   try {
        const results = await getLsActivoMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsActivoCtr
}