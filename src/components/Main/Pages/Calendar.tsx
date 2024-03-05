import React, { useState } from 'react'

export const Calendar = () => {
  // Получение текущей даты
  const currentDate = new Date()
  const [year, setYear] = useState(currentDate.getFullYear())
  const [month, setMonth] = useState(currentDate.getMonth())
  // Функция для установки предыдущего месяца
  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1)
      setMonth(11)
    } else {
      setMonth(month - 1)
    }
  }

  // Функция для установки следующего месяца
  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1)
      setMonth(0)
    } else {
      setMonth(month + 1)
    }
  }

  // Определение количества дней в месяце
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Получение первого дня месяца (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
  const firstDayOfMonth = new Date(year, month, 1).getDay()

  // Формирование массива дней в месяце
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div>
      <h1 className="text-center">Календарь</h1>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={prevMonth}
          >
            Предыдущий месяц
          </button>
          <h2 className="text-xl font-bold">
            {new Date(year, month).toLocaleDateString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={nextMonth}
          >
            Следующий месяц
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map((day) => (
            <div key={day} className="text-center font-bold border p-2">
              {day}
            </div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="border" />
          ))}
          {daysArray.map((day) => {
            if (
              month === currentDate.getMonth() &&
              day === currentDate.getDate()
            ) {
              return (
                <div
                  key={day}
                  className="bg-emerald-500 text-center border p-2"
                >
                  {day}
                </div>
              )
            }
            return (
              <div key={day} className="text-center border p-2">
                {day}
              </div>
            )
          })}
        </div>
        <button className="mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded">
          Добавить событие
        </button>
      </div>
    </div>
  )
}
