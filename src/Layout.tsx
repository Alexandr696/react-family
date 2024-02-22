import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Login } from './components/Models/Login'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  function showModal() {
    if (isOpen) {
      setIsOpen(!isOpen)
    } else {
      setIsOpen(!isOpen)
    }
  }
  return (
    <>
      <Login ShowModel={showModal} isOpen={isOpen} />
      <Header ShowModel={showModal} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
