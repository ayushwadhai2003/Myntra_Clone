import React from 'react'

function ErrorPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-9xl font-semibold text-red-900'>404</h1>
            <h1 className='text-4xl font-semibold text-blue-400'>Page Not Found</h1>
            <h1
                className='text-lg text-blue-400 hover:cursor-pointer hover:underline hover:text-red-500'
                onClick={() => window.history.back()}
            >
                Go Back
            </h1>
        </div>
    )
}

export default ErrorPage