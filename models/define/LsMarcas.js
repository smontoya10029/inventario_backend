const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsmarcas = sequelize.define('lista_marcas', {
    marcas: {
        type: Sequelize.TEXT,
        field:'marcas'
    }
  }
);

module.exports = { 
    df_lsmarcas
}