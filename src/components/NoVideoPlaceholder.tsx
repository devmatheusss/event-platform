import { useGetSubscriberByIdQuery } from "@/graphql/generated"
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function NoVideoPlaceholder() {
  const id = cookies.get("userId")

  const { data, loading, error } = useGetSubscriberByIdQuery({
    variables: {
      id
    }
  })

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      {!loading && (
        <>
          <h1 className="font-bold text-2xl">Olá! {data?.subscriber?.name.match(/^[^\s]+/)[0]}</h1>
          <span className="text-gray-200">Selecione uma aula para começar a assistir</span>
        </>
      )}
    </div>
  )
}
