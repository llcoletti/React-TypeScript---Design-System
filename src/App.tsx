import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Logo } from './Logo';
import {TextInput} from './components/textinput';
import { Envelope, Lock } from 'phosphor-react'

import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex flex-col items-center gap ">
        <Logo />
        <Heading size="lg" className="mt-4">
          ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        <label htmlFor="email" className="font-semibold flex flex-col gap-3">
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id='email' placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="font-semibold flex flex-col gap-3">
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input  type="password" id='password' placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4 flex">Entrar na plataforma</Button> 
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
         <a href="" className="text-gray-400 underline">Não possui conta? Crie uma agora!</a>
        </Text>
        </footer>
    </div>
  )
}

