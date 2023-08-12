import { Logo } from "@/assets/Logo";
import { CircleNotch, SignOut } from "@phosphor-icons/react";

interface HeaderProps {
  userName: string
  signOut: () => void
}

export function Header({ userName, signOut }: HeaderProps) {
  return (
    <header className='flex items-center bg-gray-700 border-b border-gray-600 px-8 min-h-[72px]'>
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between">
        <Logo />

        <div>
          {!userName ? (
            <div className="w-12 h-12 flex items-center justify-center">
              <CircleNotch className="animate-spin" size={20} />
            </div>
          ) : (
            <button
              className="block rounded-full w-12 h-12 border-2 border-green-500 overflow-hidden group relative transition hover:border-red-500 text-red-500"
              onClick={signOut}
            >
              <SignOut className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition" weight="bold" size={20} />
              <img
                src={`https://ui-avatars.com/api/?background=8257E5&color=fff&name=${userName.replace(/\s+/g, '+')}`}
                alt="Imagem do Usuário"
                className="w-full h-full group-hover:opacity-20 transition"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
