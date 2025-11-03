import * as service from "../services/service.js";

// get all resources
export const getAll = (req, res) => {
    // kanjib data mn service
    res.json(service.getAll());
};

// get one
export const getOne = (req, res) => {
    const id = req.params.id;
    const item = service.getOne(id);

    if (!item) {
        return res.status(404).json({ message: "❌ Makaynch" });
    }
    res.json(item);
};

// create
export const create = (req, res) => {
    const newItem = service.create(req.body);
    res.status(201).json(newItem);
};

// update
export const update = (req, res) => {
    const id = req.params.id;
    const item = service.update(id, req.body);

    if (!item) {
        return res.status(404).json({ message: "❌ Makaynch" });
    }
    res.json(item);
};

// delete
export const remove = (req, res) => {
    const id = req.params.id;
    const ok = service.remove(id);

    if (!ok) {
        return res.status(404).json({ message: "❌ Makaynch" });
    }
    res.status(204).send(); // 204: ma kayrj3 walo
};
