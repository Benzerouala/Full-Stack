// service kaykhwi data mn file / memory
import data from "../data/resources.json" assert { type: "json" };

// get all
export const getAll = () => data;

// get one
export const getOne = (id) => {
    return data.find((x) => x.id == id);
};

// create
export const create = (obj) => {
    obj.id = Date.now();
    data.push(obj);
    return obj;
};

// update
export const update = (id, body) => {
    const index = data.findIndex((x) => x.id == id);
    if (index === -1) return null;

    data[index] = { ...data[index], ...body };
    return data[index];
};

// delete
export const remove = (id) => {
    const index = data.findIndex((x) => x.id == id);
    if (index === -1) return false;

    data.splice(index, 1);
    return true;
};
