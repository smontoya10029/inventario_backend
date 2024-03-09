const router = require('express').Router()
const { 
  getLsMantenimiento, 
  getLsTipoIdentificacionCtr, 
  getLsTipoCompraCtr,
  getLsTipoActivoCtr,
  getLsPisosCtr,
  getLsModelosCtr,
  getLsPaisCtr,
  getLsActivoCtr,
  getLsCiudadCtr,
  getLsColoresCtr,
  getLsDisponibilidadCtr,
  getLsEstadoCtr,
  getLsMarcasCtr,
  getLsMaterialesCtr,
  getLsModeloCtr,
  getLsPaisCtr,
  getLsPisoCtr
} = require('../controllers')


// gets Listas
router.get('/getlsMantenimiento',getLsMantenimiento )
router.get('/getlsTipoIdentificacion',getLsTipoIdentificacionCtr ),
router.get('/getlsTipoCompra',getLsTipoCompraCtr )
router.get('/getlsTipoActivo',getLsTipoActivoCtr )
router.get('/getlsPisos',getLsPisosCtr )
router.get('/getlsModelos',getLsModelosCtr )
router.get('/getlsPais',getLsPaisCtr )
router.get('/getLsActivo',getLsActivoCtr )
router.get('/getLsCiudad',getLsCiudadCtr )
router.get('/getLsColores',getLsColoresCtr )
router.get('/getLsDisponibilidad',getLsDisponibilidadCtr )
router.get('/getLsEstado',getLsEstadoCtr )
router.get('/getLsMarcas',getLsMarcasCtr )
router.get('/getLsMateriales',getLsMaterialesCtr )
router.get('/getLsModelo',getLsModeloCtr )
router.get('/getLsPais',getLsPaisCtr )
router.get('/getLsPiso',getLsPisoCtr )
module.exports = router
