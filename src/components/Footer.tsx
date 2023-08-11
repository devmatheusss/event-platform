import { RocketseatLogo } from "@/assets/RocketseatLogo";

export function Footer() {
  return (
    <footer className="w-full mt-20 bg-gray-900 text-gray-300 p-6 flex items-center gap-6 border-t border-gray-600">
      <RocketseatLogo />
      <span className="flex-1 text-sm">Rocketseat - Todos os direitos reservados</span>
      <a href="#" className="hover:text-gray-100 hover:underline text-sm">Políticas de privacidade</a>
    </footer>
  )
}
