import { CaretRight, CircleNotch, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "@phosphor-icons/react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'
import { Footer } from "./Footer";
import { useGetLessonBySlugQuery } from "@/graphql/generated";

export function Video({ lessonSlug }: { lessonSlug: string }) {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <CircleNotch size={48} className="animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="font-bold text-2xl">{data.lesson.title}</h1>
            <p className="text-gray-200 mt-4 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt={`Avatar de ${data.lesson.teacher.name}`}
              />
              <div className="leading-relaxed">
                <h4 className="font-bold text-2xl">{data.lesson.teacher.name}</h4>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>

          <div className="text-sm font-bold flex flex-col gap-4">
            <a href="https://discord.gg/rocketseat" target="_blank" rel="external noreferrer" className="flex justify-center items-center gap-2 bg-green-500 rounded p-4 hover:bg-green-700 transition">
              <DiscordLogo size={20} />
              <span>COMUNIDADE NO DISCORD</span>
            </a>
            <a href={"#"} className="flex justify-center items-center gap-2 text-blue-500 border border-blue-500 rounded p-4 hover:bg-blue-500 hover:text-gray-900 transition">
              <Lightning size={20} />
              <span>ACESSE O DESAFIO</span>
            </a>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-2 gap-8">
          <a href="#" className="flex items-stretch gap-6 hover:bg-gray-600 transition-colors bg-gray-700 rounded overflow-hidden">
            <div className="p-6 bg-green-700 h-full flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <h5 className="font-bold text-2xl">Material complementar</h5>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>

          </a>

          <a href="#" className="flex items-stretch gap-6 hover:bg-gray-600 transition-colors bg-gray-700 rounded overflow-hidden">
            <div className="p-6 bg-green-700 h-full flex items-center">
              <ImageSquare size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <h5 className="font-bold text-2xl">Wallpapers exclusivos</h5>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>

          </a>
        </section>
      </div>

      <Footer />
    </div>
  )
}
