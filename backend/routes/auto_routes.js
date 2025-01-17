var express = require('express');
var router = express.Router();

const autoController = require("../controllers/auto.controller");

/* GET list of autos. */router.post('/List', async function (request, response) {
    try {
        const result = await autoController.listAutos();
        response.status(200).json({
            status: true,
            message: "Lista de autos obtenida con éxito",
            data: result,
        });
    } catch (error) {
        response.status(500).json({
            status: false,
            message: "Hubo un error al obtener la lista de autos",
            error: error.message,
        });
    }
});

/* Create a new auto. */
router.post('/Create', function (request, response) {
    console.log(request.body);
    const result = autoController.postCreate(request.body);
    response.status(200).json({
        status: true,
        message: "Auto creado exitosamente",
    });
});

/* Update an existing auto. */
router.post('/Update', function (request, response) {
    const result = autoController.updateAuto(request.body);
    response.status(200).json({
        status: true,
        message: "Auto actualizado exitosamente",
        info: result
    });
});


/* Delete an auto. */
router.post('/Delete', function (request, response) {
    const result = autoController.deleteAuto(request.body);
    response.status(200).json({
        status: true,
        message: "Auto eliminado exitosamente",
        info: result
    });
});

module.exports = router;
