const {  getLspisoMdl } = require('../../models')
const getLsPisoCtr = async (req, res) => {
   try {
        const results = await getLspisoMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsPisoCtr
}