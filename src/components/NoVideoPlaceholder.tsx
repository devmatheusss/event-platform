interface NoVideoPlaceholderProps {
  userName: string
}

export function NoVideoPlaceholder({ userName }: NoVideoPlaceholderProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      {userName && (
        <>
          <h1 className="font-bold text-2xl">Olá! {userName.match(/^[^\s]+/)[0]}</h1>
          <span className="text-gray-200">Selecione uma aula para começar a assistir</span>
        </>
      )}
    </div>
  )
}
