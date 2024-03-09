const {  getLscoloresMdl } = require('../../models')
const getLsColoresCtr = async (req, res) => {
   try {
        const results = await getLscoloresMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsColoresCtr
}