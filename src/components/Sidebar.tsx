import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: "live" | "class"
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="bg-gray-700 border-l border-gray-600 p-6 w-[348px]">
      <h2 className="font-bold text-2xl border-b border-gray-600 pb-6 mb-6">Cronograma das aulas</h2>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              {...lesson}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
      </div>
    </aside>
  )
}
