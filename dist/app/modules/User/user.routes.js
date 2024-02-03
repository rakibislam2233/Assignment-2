"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const route = express_1.default.Router();
route.post('/', user_controller_1.userController.createUser);
route.get('/', user_controller_1.userController.getAllUser);
route.get('/:userId', user_controller_1.userController.getSingleUser);
route.put('/:userId', user_controller_1.userController.updateSingleUser);
route.delete('/:userId', user_controller_1.userController.deleteUser);
exports.userRoute = route;
