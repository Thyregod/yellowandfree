import * as React from 'react'

// TODO : make pretty
// TODO : make responsive
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1 className="text-5xl text-bold bg-yellow-400 rounded p-2">Yellow And Free</h1>
			{children}
		</div>
	)
}
