const mongoose = require('mongoose');
const { Schema } = mongoose;

MemeSchema = new Schema(
    {
        id: {type:number},
        origen: { type: String },
        idioma: { type: String },
        fecha: { type: Date }
    }
);


models.exports = mongoose.model('memes', MemeSchema);

