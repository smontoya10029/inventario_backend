const {  getLsmaterialesMdl } = require('../../models')
const getLsMaterialesCtr = async (req, res) => {
   try {
        const results = await getLsmaterialesMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsMaterialesCtr
}