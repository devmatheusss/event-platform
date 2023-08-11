import { Header } from "@/components/Header";
import { Video } from "@/components/Video";
import { Sidebar } from "@/components/Sidebar";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <main className="flex flex-1">
        <Video lessonSlug={slug} />
        <Sidebar />
      </main>
    </div>
  )
}
