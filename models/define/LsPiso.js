const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lspiso = sequelize.define('lista_modelo', {
    piso: {
        type: Sequelize.TEXT,
        field:'piso'
    }
  }
);

module.exports = { 
    df_lspiso
}