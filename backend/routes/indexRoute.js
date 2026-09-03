import express from 'express'
import * as indexController from "../controllers/indexController.js"

const indexRouter = express.Router()

// ------ GET -------- //
indexRouter.get('/', indexController.test)
indexRouter.get('/sponsors', indexController.getAllSponsors)


// ------ POST -------- //
indexRouter.post('/sponsors', indexController.createNewSponsor)


// ------ PATCH -------- //


// ------ DELETE -------- //


export default indexRouter