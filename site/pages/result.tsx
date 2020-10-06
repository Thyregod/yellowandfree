import * as React from 'react'
import Link from 'next/link'
import { Models } from '@gg/api/db'
import { apiClient } from '@gg/api/client'

import { NextPage } from 'next'

interface Props {
	listings: Models.Listing[];
}

const Result: NextPage<Props> = ({ listings }) => {
	// TODO : add prices + type (icon?)
	// TODO : make it hurt my eyes less (using tailwind or custom css)
	// TODO : use "helmet" to change title of page
	// TODO : add dark mode (toggle or from browser)
	// TODO : make SEO friendly (SSR)
	// TODO : sort by price
	// TODO : add menu
	// TODO : add search box
	// TODO : filter by type (buy vs sell)
	// TODO : pagination
	// TODO : toggle list vs cards

	return (
		<>
			<ul>
				{listings.map(listing => (
					<li className="text-2xl" key={listing.id}>
						<Link passHref href={`/listing/${listing.id}`}>
							<a>{listing.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

Result.getInitialProps = async () => {
	const listings = await apiClient.listings.getAll()
	return { listings }
}

export default Result
