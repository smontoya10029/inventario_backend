const {  getLsmarcasMdl } = require('../../models')
const getLsMarcasCtr = async (req, res) => {
   try {
        const results = await getLsmarcasMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsMarcasCtr
}