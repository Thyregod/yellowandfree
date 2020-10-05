import * as express from 'express'
import { DAO, Models } from './db'

const app = express()


// TODO : add CORS
// TODO : use graphql
app.get('/listings', (_req, res) => {
	// TODO : no pagination?
	const posts: Models.Listing[] = DAO.Listing.findAll()

	// TODO: you CAN do way better than this
	console.log('/listings')

	res.json(posts)
})


app.listen(5000)

// TODO : Maybe this should be after the server has started listening?
console.log('API started on port 5000')
