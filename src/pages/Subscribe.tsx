import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CircleNotch } from "@phosphor-icons/react";

import { Logo } from "@/assets/Logo";
import { Footer } from "@/components/Footer";
import { useCreateSubscriberMutation } from "@/graphql/generated";

import CodeMockup from '@/assets/code-mockup.png'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function Subscribe() {
  const hasUserId = cookies.get('userId')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()

  const navigate = useNavigate()

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    cookies.set("userId", data.createSubscriber.id)

    navigate("/event")
  }

  if (hasUserId) {
    return <Navigate to={"/event"} />
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center gap-10">
      <section className="w-full mt-20 mx-auto max-w-[1100px] flex items-center justify-between">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>

        <div className="p-8 rounded border border-gray-500 bg-gray-700 flex flex-col gap-6">
          <strong className="text-2xl block">Inscreva-se gratuitamente</strong>

          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubscribe}>
            <input
              className="h-14 px-5 rounded bg-gray-900 outline-none border-2 border-transparent valid:focus:border-green-500 invalid:border-red-500"
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="h-14 px-5 rounded bg-gray-900 outline-none border-2 border-transparent valid:focus:border-green-500 invalid:border-red-500"
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <button
              className="mt-4 h-14 outline-none border-2 border-transparent focus:border-white bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold uppercase hover:bg-green-700 transition-colors disabled:cursor-not-allowed disabled:opacity-80"
              type="submit"
              disabled={loading}
            >
              {loading ? <CircleNotch className="animate-spin" size={20} /> : "garantir minha vaga"}
            </button>
          </form>
        </div>
      </section>

      <img src={CodeMockup} alt="Code Mockup" />

      <Footer />
    </div>
  )
}
