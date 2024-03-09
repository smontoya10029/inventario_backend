const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsdisponibilidad = sequelize.define('lista_disponibilidad', {
    disponibilidad: {
        type: Sequelize.TEXT,
        field:'disponibilidad'
    }
  }
);

module.exports = { 
    df_lsdisponibilidad
}