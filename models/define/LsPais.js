const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lspais = sequelize.define('lista_modelo', {
    activo: {
        type: Sequelize.TEXT,
        field:'pais'
    }
  }
);

module.exports = { 
    df_lspais
}