const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsPisos = sequelize.define('lista_tipo_activo', {
    tipo_identificacion: {
        type: Sequelize.TEXT,
        field:'tipo_activo'
    }
  }
);

module.exports = { 
    df_lsPisos
}