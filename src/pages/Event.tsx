import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetSubscriberByIdQuery } from "@/graphql/generated";

import { Header } from "@/components/Header";
import { Video } from "@/components/Video";
import { Sidebar } from "@/components/Sidebar";
import { NoVideoPlaceholder } from "@/components/NoVideoPlaceholder";

export function Event() {
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const { data, loading } = useGetSubscriberByIdQuery({
    variables: {
      id: cookies.userId
    }
  })

  function handleSignOut() {
    // removeCookie("userId", { path: "/" })
  }

  if (!cookies.userId) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='h-screen flex flex-col'>
      <Header userName={data?.subscriber?.name} signOut={handleSignOut} />
      <main className="flex flex-1">
        {
          slug
            ? <Video lessonSlug={slug} />
            : <NoVideoPlaceholder userName={data?.subscriber?.name} />
        }
        <Sidebar />
      </main>
    </div>
  )
}
