import { CheckCircle, Lock } from "@phosphor-icons/react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class"
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)

  const formmatedDate = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const { slug } = useParams<{ slug: string }>()
  const isActiveLesson = slug === props.slug

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      data-available={isLessonAvailable}
      className="
        group 
        flex 
        flex-col 
        gap-2 
        data-[available=false]:cursor-not-allowed 
        data-[available=false]:opacity-70"
    >
      <span className="text-gray-300">
        {formmatedDate}
      </span>

      <div
        data-active={isActiveLesson}
        className="
          group-data-[available=true]:group-hover:border-green-500 
          transition-colors 
          border 
          border-gray-500 
          rounded 
          p-4 
          flex 
          flex-col 
          gap-4
          data-[active=true]:bg-green-500
          group"
      >
        <header className="flex items-center justify-between">

          {isLessonAvailable ? (
            <span className="font-medium text-sm text-blue-500 flex items-center gap-2 group-data-[active=true]:text-white">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="font-medium text-sm text-orange-500 flex items-center gap-2 group-data-[active=true]:text-white">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="px-2 py-0.5 rounded border border-green-300 text-green-300 font-bold text-xs group-data-[active=true]:text-white group-data-[active=true]:border-white">
            {props.lessonType === 'live' ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className="
            text-gray-200
            block
            group-data-[active=true]:text-white
          "
        >{props.title}</strong>
      </div>
    </Link>
  )
}
