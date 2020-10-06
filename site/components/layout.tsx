import * as React from 'react'
import Header from './header'
import PageContainer from './page-container'

// TODO : make pretty
// TODO : make responsive
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col h-screen">
			<Header/>
			<PageContainer>
				{children}
			</PageContainer>
		</div>
	)
}
