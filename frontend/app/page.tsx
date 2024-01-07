import Image from 'next/image'
// this should probably be the login page
import Form from '../components/Form'
import { Provider } from 'react-redux'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      getServerSession Result {session?.user?.name ? (
        <div> {session?.user?.name} </div>
      ) : (
        <div>Not logged in</div>
      )}
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}
