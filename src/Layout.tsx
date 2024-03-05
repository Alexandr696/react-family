import { createContext, useState } from 'react'
import { Header } from './components/Header/Header'
import { Login } from './components/Models/Login'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const UserContext = createContext<{
  login: string
  password: string
} | null>(null)

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [loginInf, setLoginInf] = useState({
    login: '',
    password: '',
  })

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === 'login')
      setLoginInf({ ...loginInf, login: e.target.value })
    else setLoginInf({ ...loginInf, password: e.target.value })
  }

  function showModal(e: any) {
    if (isOpen) {
      // Опции для POST запроса
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Указываем, что отправляем JSON данные
        },
        body: JSON.stringify(loginInf), // Преобразуем данные в строку JSON
      }
      // Выполняем POST запрос
      fetch('http://localhost:5000/login', requestOptions)
        .then((response) => response.json())
        .then((data) => setIsLogin(data.isLogin))
        .catch((error) =>
          console.error('Ошибка при выполнении запроса:', error)
        )
      setIsOpen(!isOpen)
    } else if (!isOpen && isLogin) {
      setIsLogin(false)
      setLoginInf({
        login: '',
        password: '',
      })
    } else {
      console.log(isOpen)
      setIsOpen(!isOpen)
    }
  }
  return (
    <>
      <UserContext.Provider value={{ login: '', password: '' }}>
        <Login
          ShowModel={showModal}
          inputChange={inputChange}
          isOpen={isOpen}
        />
        <Header ShowModel={showModal} isOpen={isLogin} />

        {isLogin && (
          <Main>
            <Outlet />
          </Main>
        )}

        <Footer />
      </UserContext.Provider>
    </>
  )
}
