import * as React from 'react'
import { Models, SalesType } from '@gg/api/db'
import { apiClient } from '@gg/api/client'

import { NextPage } from 'next'

interface IListingRow {
    name: string,
    price: number,
    type: SalesType
}

interface Props {
    listings: Models.Listing[];
}

const ListingList: NextPage<Props> = ({ listings }) => {
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

    const rows: IListingRow[] = listings.map(x => {
        return {
            name: x.title,
            price: x.price,
            type: x.type
        }
    });

    return createListingsList(rows)
}

ListingList.getInitialProps = async () => {
    const listings = await apiClient.listings.getAll()
    return { listings }
}

function createListingsList(listings: IListingRow[]): JSX.Element {
    const headerRow = getHeaderRow(listings[0]);
    const listingRows = getListingRows(listings);

    return (
        <div className="flex flex-col h-full">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 h-full">
                    <div className="shadow border-b border-gray-200 sm:rounded-lg h-full overflow-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                {headerRow}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {listingRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getHeaderRow(Listing: IListingRow): JSX.Element {
    const listingModel = Listing ?? {name: undefined, price: undefined, type: undefined} as IListingRow;
    const headerColumnTitles = Object.keys(listingModel).map(x => capitalize(x));

    return (
    <tr className="text-sm font-medium text-white text-left bg-gray-800" >
        {headerColumnTitles.map((headerColumn, index) => {
            return (
                <th key={index} className="px-4 py-2">
                    {headerColumn}
                </th>
            )
        })}
    </tr>);
}

function getListingRows(listings: IListingRow[]): JSX.Element[] {
    return listings.map((listing, index) =>
        <tr key={index} className="hover:bg-gray-100  border-gray-200">
            {
                Object.values(listing).map((listingValue, index) =>
                    <td key={index} className="px-6 py-4 whitespace-no-wrap">
                        <span className="text-sm leading-5 text-gray-900">
                            {listingValue}
                        </span>
                    </td>
                )
            }
        </tr>);
}

function capitalize(string: string) {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default ListingList
