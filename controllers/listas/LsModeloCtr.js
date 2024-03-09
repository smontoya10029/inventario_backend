const {  getLsmodeloMdl } = require('../../models')
const getLsModeloCtr = async (req, res) => {
   try {
        const results = await getLsmodeloMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsModeloCtr
}