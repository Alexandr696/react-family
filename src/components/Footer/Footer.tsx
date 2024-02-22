export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center">
      <div className="container mx-auto">
        <p>Сайт разработал Мужельских Александр</p>
        <p>
          &copy; {new Date().getFullYear() + '-' + new Date().getFullYear() + 1}{' '}
          Все права защищены
        </p>
      </div>
    </footer>
  )
}
