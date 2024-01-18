import Image from 'next/image'
// this should probably be the login page
import Form from '@/components/Form';
import { Provider } from 'react-redux'
import { getServerSession } from 'next-auth'
import { Span } from 'next/dist/trace';

export default async function Home() {
  const session = await getServerSession();

  //Red -> Pink -> Green  -> Blue -> Copper -> Silver -> Gold
  const red = 'text-red-500'
  const pink = 'text-pink-500'
  const green = 'text-green-500'
  const blue = 'text-blue-500'
  const copper = 'text-yellow-500'
  const silver = 'text-gray-500'
  const gold = 'text-yellow-300'
  const xp = 100000;

  return (
    <>
      getServerSession Result {session?.user?.name ? (
        <div> {session?.user?.name} </div>
      ) : (
        <div>Not logged in</div>
      )}
      <div>
        <h1>Home</h1>
        <h3>Your Rank: 
          { xp < 60 ? <span className={red}>Red</span> : (xp < 300) ? <span className={pink}>Pink</span> : (xp < 600) ? <span className={green}>Green</span> : (xp < 1200) ? <span className={blue}>Blue</span> : (xp < 1800) ? <span className={copper}>Copper</span> : (xp < 3000) ? <span className={silver}>Silver</span> : <span className={gold}>Gold</span>}
        </h3>
      </div>
    </>
  )
}
