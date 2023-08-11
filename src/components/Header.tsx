import { Logo } from "@/assets/Logo";
import { useGetSubscriberByIdQuery } from "@/graphql/generated";
import { CircleNotch } from "@phosphor-icons/react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function Header() {
  const id = cookies.get("userId")

  const { data, loading } = useGetSubscriberByIdQuery({
    variables: {
      id
    }
  })

  return (
    <header className='flex items-center bg-gray-700 border-b border-gray-600 px-8 min-h-[72px]'>
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between">
        <Logo />

        <div className="">
          {loading ? (
            <CircleNotch />
          ) : (
            <img src={`https://ui-avatars.com/api/?background=8257E5&color=fff&name=${data.subscriber.name}`} alt="Imagem do Usuário" className="rounded-full w-12 h-12 border-2 border-green-500" />
          )}
        </div>
      </div>
    </header>
  )
}
