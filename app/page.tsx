import {headers } from 'next/headers'

export default async function Home(props: any) {
  console.log('Home rendering on the server');
  //this forces the page to be re-rendered on the server
  headers();

  return (
    <div>
      <h1>Hello World</h1>
      <h3>{Date.now()}</h3>
    </div>
  )
}
