const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsmateriales = sequelize.define('lista_materiales', {
    material: {
        type: Sequelize.TEXT,
        field:'material'
    }
  }
);

module.exports = { 
    df_lsmateriales
}