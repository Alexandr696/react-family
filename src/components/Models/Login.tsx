import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ModelProps } from '../../types/data'

const layout = [
  {
    for: 'login',
    name: 'Логин',
  },
  {
    for: 'password',
    name: 'Пароль',
  },
]

export const Login: FC<ModelProps> = ({
  LoginModel,
  OpenModel,
  CloseModel,
  inputChange,
  isOpen,
}: ModelProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={CloseModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Форма регистрации
                  </Dialog.Title>
                  <div className="mt-2">
                    <form action="">
                      <div className="sm:col-span-4">
                        {layout.map((item, index) => (
                          <div className="mt-2" key={index}>
                            <label
                              htmlFor={item.for}
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              {item.name}
                            </label>
                            <div className="mt-2">
                              <input
                                onChange={inputChange}
                                type="text"
                                name={item.for}
                                id={item.for}
                                autoComplete={item.for}
                                className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                                placeholder={item.name}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 float-right"
                      onClick={CloseModel}
                    >
                      Отмена
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 float-right"
                      onClick={LoginModel}
                    >
                      Вход
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
