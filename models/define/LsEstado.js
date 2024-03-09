const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsestado = sequelize.define('lista_estado', {
    estado: {
        type: Sequelize.TEXT,
        field:'estado'
    }
  }
);

module.exports = { 
    df_lsestado
}