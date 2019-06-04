/*
Import
*/
const ScoreModel = require('../../models/score.model');
//

/*
Methods
*/

const fetchScore = () => {
  return new Promise((resolve, reject) => {
    ScoreModel.find({})
      .populate('player')
      .exec((err, scores) => {
        if (err) return reject(err); // Mongo Error
        return resolve({ scores });
      });
  });
};

const saveScore = (body, idUser) => {
  return new Promise((resolve, reject) => {
    const scoreCreated = new ScoreModel({
      score: body.score,
      player: idUser
    });

    scoreCreated
      .save()
      .then(mongoResponse => resolve(mongoResponse))
      .catch(mongoResponse => reject(mongoResponse));
  });
};

/*
Export
*/
module.exports = {
  fetchScore,
  saveScore
};
//
