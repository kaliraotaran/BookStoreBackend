

const mongoose = require('mongoose')

const bookschema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String, 
            required: true
        },
        publishYear:{
            type: Number,
            required: true
        }
    },
{
    timestamps:true //this will add createdAt and updatedAt as fields in our database with dates
}
);

module.exports= mongoose.model('Book', bookschema)