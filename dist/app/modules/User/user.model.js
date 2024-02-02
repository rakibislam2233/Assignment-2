"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
//create fullname schema
const FullNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, 'First name can not me more then 50 characters'],
        validate: {
            validator: function (value) {
                const firstName = value.charAt(0).toUpperCase() + value.slice(1);
                return firstName === value;
            },
            message: '{VALUE} is not capitalized formate',
        },
    },
    lastName: { type: String, required: true, trim: true },
});
//create address schema
const AddressSchema = new mongoose_1.Schema({
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
});
//create order schema
// const OrderSchema = new Schema<TOrder>({
//   productName: { type: String },
//   price: { type: Number, min: 0 },
//   quantity: { type: Number, min: 1 },
// })
//create user schema
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, 'User id is required'],
        unique: true,
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    fullName: {
        type: FullNameSchema,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    hobbies: {
        type: [String],
        required: true,
    },
    address: {
        type: AddressSchema,
        required: true,
    },
    //   orders: {
    //     type: [OrderSchema],
    //   },
});
//create model
exports.User = (0, mongoose_1.model)('user', userSchema);
