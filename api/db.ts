import * as faker from 'faker'

type SalesType = 'buy' | 'sell'

export namespace Models {
	export interface Listing {
		id: string;
		price: number;
		frontpage: boolean;
		type: SalesType;
		title: string;
		content: string;
	}
}

type DbType = {
	listings: { [id: string]: Models.Listing }
}

// TODO : use a real database (sqlite, mongo, redis ... even json file)
const db: DbType = { listings: {} }

type ByQueryString = {
	query?: string
}

type BySalesTypeString = {
	type?: SalesType
}

type Limitation = {
	limit?: number
}

// TODO : are there better ways to do this?
type AllQueryOptions = ByQueryString & Limitation & BySalesTypeString

export namespace DAO {
	// TODO : add users

	// TODO : add create + update + delete
	export class Listing {
		static generate(): Models.Listing {
			const title = faker.commerce.productName()
			const content = (title + ' With ' + faker.commerce.productAdjective() + ' ' + faker.commerce.productMaterial()).toLowerCase()
			const price = (faker.random.number(150) + 1) * 100
			const type = faker.random.boolean() ? 'buy' : 'sell'
			const frontpage = faker.random.boolean()
			const id = faker.random.alphaNumeric(5)

			db.listings[id] = { id, price, type, title, content, frontpage }

			return db.listings[id]
		}

		// TODO : would this be better if each query type had its own method?
		static findAll(options: AllQueryOptions = {}) {
			// TODO : add offset to provide support for pagination
			// TODO : add query by string (substring of title or content)

			const limit = options.limit ? options.limit : 10

			while (Object.keys(db.listings).length < limit) {
				Listing.generate()
			}

			const listings: Models.Listing[] = []
			for (const listing in db.listings) {
				listings.push(db.listings[listing])
				if (listings.length == limit) {
					break
				}
			}

			return listings
		}

		static findById(id: string): Models.Listing | false {
			if (id) {
				// TODO : fix this typescript error (may return undefined)
				return db.listings[id]
			}

			return false
		}
	}
}

