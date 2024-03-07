import { Fragment, useState } from 'react'
import { LoginRegProps } from '../../../types/data'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'
const show = require('../../../assets/show.png')
const hidden = require('../../../assets/hidden.png')

const logo = require('../../../assets/logo.png')
const people = [
  { name: 'Начальник' },
  { name: 'Заместитель' },
  { name: 'Рабочий' },
]
export const About = () => {
  const [selected, setSelected] = useState(people[0])
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
                  className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
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
          <label
            htmlFor="login"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Роль
          </label>
          <div className="mt-2">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-2">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
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
