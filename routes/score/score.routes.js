/*
Imports
*/
    // Node
    const express = require('express');
    const scoreRouter = express.Router();

    // Inner
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { fetchScore, saveScore } = require('./score.controller');

//

/*
Routes definition
*/
    class ScoreRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            /**
             * POST Route to create new identity
            */
           scoreRouter.post( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                const idUser = req.user._id;
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };

                //=> Request is valid: use controller
                saveScore(req.body, idUser)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            });

            /**
             * GET Route
            */
            scoreRouter.get( '/', (req, res) => {
                
                fetchScore()
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return scoreRouter;
        };
    };
//

/*
Export
*/
    module.exports = ScoreRouterClass;
//