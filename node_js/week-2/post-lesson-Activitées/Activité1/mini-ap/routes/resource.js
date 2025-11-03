import { Router } from "express";
import {
    getAll,
    getOne,
    create,
    update,
    remove
} from "../controllers/resource.controller.js";

import validateResource from "../middlewares/validateResource.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", validateResource, create);
router.put("/:id", validateResource, update);
router.delete("/:id", remove);

export default router;
