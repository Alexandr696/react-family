import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/Main/Pages/Home'
import { Product } from '../components/Main/Pages/Product'
import { Layout } from '../Layout'
import { About } from '../components/Main/Pages/About'
import { Calendar } from '../components/Main/Pages/Calendar'
import { NotFoundPage } from '../components/Main/Pages/NotFoundPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/react-family/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/react-family/product/" element={<Product />} />
        <Route path="/react-family/about/" element={<About />} />
        <Route path="/react-family/calendar/" element={<Calendar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
