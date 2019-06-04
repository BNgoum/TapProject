/*
Import
*/
// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
const scoreSchema = new Schema(
  {
    score: Number,
    player: { type: Schema.Types.ObjectId, ref: 'identity' }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
const ScoreModel = mongoose.model('score', scoreSchema);
module.exports = ScoreModel;
//
