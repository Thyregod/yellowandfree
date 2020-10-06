import * as React from 'react'

function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Listings
                    </h1>
                </div>
            </header>
            <main className="bg-white flex-1 min-h-0">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageContainer;
