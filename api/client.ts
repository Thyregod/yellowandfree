import axios from 'axios'
import { Models } from './db'

// TODO : configurable?
const baseURL = 'http://localhost:5000'

const instance = axios.create({
	baseURL
})

export const apiClient = {
	listings: {
		async getAll(): Promise<Models.Listing[]> {
			const { data } = await instance.get('/listings')
			return data
		}
	}
}
