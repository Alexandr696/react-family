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

  const loginin = {
    login: 'akado',
    password: '123',
  }

  function inputChange(e: any) {
    if (e.target.name === 'login')
      setLoginInf({ ...loginInf, login: e.target.value })
    else setLoginInf({ ...loginInf, password: e.target.value })
  }

  function showModal(e: any) {
    console.log(isOpen)
    if (isOpen) {
      if (
        loginInf.login === loginin.login &&
        loginInf.password === loginin.password
      ) {
        setIsLogin(true)
      }
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
