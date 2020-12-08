import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../graphql-client/client'

const TransactionsQuery = gql`
  query TransactionsQuery {
    transactions {
      id
      state
    }
  }
`

export default function Home() {
  const {
    data,
  } = useQuery(TransactionsQuery)
  
  return (
    <main>
      <p>this is madness but it works</p>

      <ul>
        {data?.transactions?.map(trans => (
          <li>
            {trans.id}
            <br />
            {trans.state}
          </li>
        ))}
      </ul>
      
    </main>
  )
}


export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: TransactionsQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}