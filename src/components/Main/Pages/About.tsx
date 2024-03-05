import { useState } from 'react'
import { LoginRegProps } from '../../../types/data'
const show = require('../../../assets/show.png')
const hidden = require('../../../assets/hidden.png')

const logo = require('../../../assets/logo.png')
export const About = () => {
  const [showb, setShowb] = useState(false)
  const [login, setLogin] = useState<LoginRegProps>({
    firstName: null,
    lastName: null,
    fullName: null,
    login: null,
    password: null,
  })

  const input = [
    {
      id: 'firstName',
      type: 'text',
      name: 'firstName',
      autoComplete: 'on',
      lable: 'Имя',
    },
    {
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      autoComplete: 'on',
      lable: 'Фамилия',
    },
    {
      id: 'fullName',
      type: 'text',
      name: 'fullName',
      autoComplete: 'on',
      lable: 'Отчество',
    },
    {
      id: 'login',
      type: 'text',
      name: 'login',
      autoComplete: 'on',
      lable: 'Логин',
    },
    {
      id: 'password',
      type: showb ? 'text' : 'password',
      name: 'password',
      autoComplete: 'current-password',
      lable: 'Пароль',
    },
  ]
  const validation = () => {
    let error = 0
    Object.keys(login).forEach((key) => {
      const loginKey: keyof LoginRegProps = key as keyof LoginRegProps
      if (login[loginKey] === null) error++
    })
    if (error > 0) {
      error = 0
      alert('error')
      return false
    } else {
      error = 0
      return true
    }
  }

  const RegisterHandler = () => {
    if (!validation()) return
    console.log(login)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем JSON данные
      },
      body: JSON.stringify(login), // Преобразуем данные в строку JSON
    }

    // Выполняем POST запрос
    fetch('http://localhost:5000/register', requestOptions)
      .then((response) => response.json())
      .then((data) => alert('success'))
      .catch((error) => console.error('Ошибка при выполнении запроса:', error))
  }
  const InputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value.length > 0 ? e.target.value : null,
    })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Зарегистировать пользователя
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          {input.map((item, index) => (
            <div key={index}>
              <label
                htmlFor={item.name}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {item.lable}
              </label>
              <div
                className={`mt-2 ${
                  item.name === 'password' ? 'flex relative' : ''
                }`}
              >
                <input
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  autoComplete={item.autoComplete}
                  required
                  onChange={InputChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                {item.name === 'password' && (
                  <div className="absolute top-0.5 bottom-0 right-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShowb(!showb)
                      }}
                    >
                      <img src={showb ? hidden : show} alt="no" width={35} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={RegisterHandler}
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
