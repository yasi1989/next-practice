import React, { Suspense } from 'react'

const Page = () => {
  return (
    <div>
        <h1>Streaming SSR</h1>
        <Suspense fallback={<>Loading...</>}>
            <LagyComponent />
        </Suspense>
    </div>
  )
}

async function LagyComponent() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return <p>Lazy Component</p>
    
}

export default Page