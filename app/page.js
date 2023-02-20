'use client'
import Navbar from '@/components/Navbar'
import Heros from '@/components/Heros'
import { useSelector } from 'react-redux';

function Page(props) {
  const data = useSelector(state => state.posts.data)

  return (
    <main>
      <Navbar />
      <Heros data={data} />

    </main>

  )


}

export default Page;