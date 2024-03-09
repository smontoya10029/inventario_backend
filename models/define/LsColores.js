const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lscolores = sequelize.define('lista_colores', {
    color: {
        type: Sequelize.TEXT,
        field:'color'
    }
  }
);

module.exports = { 
    df_lscolores
}