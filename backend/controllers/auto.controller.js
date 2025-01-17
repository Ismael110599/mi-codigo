const Auto = require('../models/auto');
const modelAutos = require('../models/auto');

const listAutos = async () => {
    try {
        const result = await modelAutos.findAll();
        return result;
    } catch (error) {
        throw new Error('Error al obtener autos');
    }
}


const createAuto = async (data) => {
    const result = await modelAutos.create(data);
    return result;
}

const updateAuto = async (data) => {
    try {
        const result = await modelAutos.update(data, { where: { id: data.id } });
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Error al actualizar el auto");
    }
};



const deleteAuto = async (data) => {
    try {
        const result = await modelAutos.destroy(data, { where: { id: data.id } });
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Error al eliminar el auto");
    }
}

module.exports = {
    listAutos,
    createAuto,
    updateAuto,
    deleteAuto
}