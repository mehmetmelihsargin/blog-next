'use client'
import Navbar from '@/components/Navbar'
import Heros from '@/components/Heros'


function Page(props) {

  return (
    <main>
      <Navbar />
      <Heros />

    </main>

  )


}
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
  }
}
export default Page;