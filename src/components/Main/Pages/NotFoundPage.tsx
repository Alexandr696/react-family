import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Ошибка 404</h1>
        <p className="text-lg text-gray-600 mb-8">
          К сожалению, запрашиваемая страница не найдена.
        </p>
        <p className="text-lg text-gray-600">
          Пожалуйста, вернитесь{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            на главную страницу
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
