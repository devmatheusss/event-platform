import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "@/graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="bg-gray-700 border-l border-gray-600 p-6 w-[348px]">
      <h2 className="font-bold text-2xl border-b border-gray-600 pb-6 mb-6">Cronograma das aulas</h2>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              lessonType={lesson.lessonType}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
      </div>
    </aside>
  )
}
