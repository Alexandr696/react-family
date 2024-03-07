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
  const [isLogin, setIsLogin] = useState(false)
  const [loginInf, setLoginInf] = useState({
    login: '',
    password: '',
  })
  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === 'login')
      setLoginInf({ ...loginInf, login: e.target.value })
    else setLoginInf({ ...loginInf, password: e.target.value })
  }

  function closeModal(e: any) {
    if (isOpen) setIsOpen(false)
    if (isLogin) setIsLogin(false)
  }
  function openModal(e: any) {
    if (!isLogin) setIsOpen(true)
  }

  function loginModal(e: any) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем JSON данные
      },
      body: JSON.stringify(loginInf), // Преобразуем данные в строку JSON
    }
    //console.log(isLogin)
    // Выполняем POST запрос
    fetch('http://localhost:5000/login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setIsOpen(false)
          setIsLogin(data.result)
          setLoginInf({
            login: '',
            password: '',
          })
        }
      })
      .catch((error) => console.error('Ошибка при выполнении запроса:', error))
  }
  return (
    <>
      <UserContext.Provider value={{ login: '', password: '' }}>
        <Login
          LoginModel={loginModal}
          CloseModel={closeModal}
          OpenModel={closeModal}
          inputChange={inputChange}
          isOpen={isOpen}
        />
        <Header OpenModel={isLogin ? closeModal : openModal} isOpen={isLogin} />

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
