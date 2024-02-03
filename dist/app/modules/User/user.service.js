"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExist(userData.userId)) {
        throw new Error('User already exists');
    }
    const createdUser = yield user_model_1.User.create(userData);
    const result = yield user_model_1.User.findById(createdUser._id).select('-password');
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({}, { userId: 0 });
    return result;
});
const getSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({ userId });
    return result;
});
const deletedUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.updateOne({ userId }, { isDeleted: true });
    return result;
});
exports.userService = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    deletedUserFromDB,
};
