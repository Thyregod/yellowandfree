import * as React from 'react'

function Header() {
    const logo = yellowAndFreeLogo();
    
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="http://localhost:3000/#" title="GulogGratis" data-inspect="header:nav:logo" >
                                    {logo}
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Listings</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function yellowAndFreeLogo(): JSX.Element {
    return <svg viewBox="0 0 32 36" style={{ display: "block", height: "35px" }}>
        <path d="M31.46 15.43l-1.4 13.14a5.16 5.16 0 01-2.33 3.82l-.39.24a22.32 22.32 0 01-10.72 3.32c-5.06.33-9.35-1.07-12.42-4.37C1.1 28.25-.07 23.72.49 18.44c.53-5 2.55-9.33 5.97-12.74A19.37 19.37 0 0119.2.06c2.97-.2 5.66.09 8.07.9l.71.23a5.15 5.15 0 013.41 5.45l-.6 5.62c.53.92.8 2.01.67 3.17zm-14.57 5a.2.2 0 01.01.02v-.02z" fill="#FBD01E"></path>
        <path d="M16.1 22.8l.65-6.23 9.87-.8-1.4 13.43-.4.25a17.56 17.56 0 01-8.5 2.62c-3.73.24-6.62-.7-8.62-2.86-2-2.19-2.79-5.29-2.38-9.22.42-3.9 1.93-7.18 4.53-9.8a14.56 14.56 0 019.7-4.3c2.4-.16 4.5.06 6.3.67l.71.24-.76 7.2-1.17-.69c-1.4-.84-3.23-1.2-5.5-1.04a6.74 6.74 0 00-4.6 2.17 8.58 8.58 0 00-2.24 5.2c-.23 2.14.09 3.68.9 4.68.81 1 2.02 1.45 3.71 1.34a7.03 7.03 0 002.06-.4l.3-2.79-3.17.33z" fill="#2E2E2E"></path>
    </svg>
}

export default Header