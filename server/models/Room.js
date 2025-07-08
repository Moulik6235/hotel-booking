import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hotel: { type: String, ref: "Hotel", requried: true },
    roomType: { type: String, requried: true },
    pricePerNight: { type: Number, requried: true },
    amenities: { type: Array, requried: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true }

}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;