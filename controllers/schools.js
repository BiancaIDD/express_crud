// Import School Model
import School from "../models/school.js";

// get que me traiga todos los schools
export const getSchools = async (req, res) => {
    try {
        const school = await School.findAll();
        res.send(school);
    } catch (err) {
        console.log(err);
    }
}

//get schools por Id:

export const getSchoolById = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id);
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
        }
        res.send(school);
    } catch (err) {
        console.log(err);
    }
}

//crear un nuevo school
export const createSchool = async (req, res) => {
    try {
        await School.create(req.body); //usamos el modelo y le pasamos el modelo que seria un json
        res.json({
            "message": "School Created",
        });
    } catch (err) {
        console.log(err);
    }
}

//modificar/actualizr un school por id
export const updateSchool = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id); //donde le llega por parametro 
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
            return;
        }
        await School.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "School Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

//borrar por id:
export const deleteSchool = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id);
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
            return;
        }
        await School.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "School Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}