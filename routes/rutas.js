import express from "express";

// voy a separar y personalizar las rutas de cada servicio del api rest

export let rutas = express.Router()

rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
})

rutas.get('/buscarhabitacion', function (req, res) {
    res.send('estoy buscando una habitacion')
})

rutas.post('/registrarhabitacion', function (req, res) {
    res.send('estoy registrando una habitacion')
})

rutas.put('/editandohabitacion', function (req, res) {
    res.send('estoy actualizando una habitacion')
})




rutas.get('/buscarreservas', function (req, res) {
    res.send('estoy buscando todas las reservas')
})

rutas.get('/buscarreserva', function (req, res) {
    res.send('estoy buscando una reserva')
})

rutas.post('/registrarreserva', function (req, res) {
    res.send('estoy registrando una reserva')
})

rutas.put('/editandoreserva', function (req, res) {
    res.send('estoy actualizando una reserva')
})

rutas.delete('/eliminandoreserva', function (req, res) {
    res.send('estoy eliminando una reserva')
})