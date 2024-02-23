import React, { useState } from 'react'
import { Table as TableTree, Image, Button } from 'react-bootstrap'
const isAvailability: string = require('../../assets/isAvailability.png')
const isNotAvailability: string = require('../../assets/isNotAvailability.png')
const delet: string = require('../../assets/delete.png')
const edit: string = require('../../assets/edit.png')

interface ProductDetailDetailsProp {
  modal: number
  availability: boolean
  color: string
}

interface ProductDetailsProp {
  availability: boolean
  color: string
  size: string
  details: ProductDetailDetailsProp[]
}

interface ProductProp {
  id: number
  name: string
  size: string
  availability: boolean
  purchase: number
  sale: number
  finally: number
  details: ProductDetailsProp[]
}

export const Table = ({ title }: any) => {
  const data: ProductProp[] = [
    {
      id: 1,
      name: 'BlackW',
      size: 'xl, l',
      availability: true,
      purchase: 100,
      sale: 123,
      finally: 1221,
      details: [
        {
          size: 'xl',
          color: 'black, white',
          availability: true,
          details: [
            { modal: 1, color: 'white', availability: true },
            { modal: 2, color: 'black', availability: false },
          ],
        },
        {
          size: 'l',
          color: 'black, white',
          availability: false,
          details: [
            { modal: 3, color: 'white', availability: false },
            { modal: 4, color: 'black', availability: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'BlackW2',
      size: 'xl, l',
      availability: true,
      purchase: 100,
      sale: 123,
      finally: 1221,
      details: [
        {
          size: 'xl',
          color: 'black, white',
          availability: true,
          details: [
            { modal: 5, color: 'white', availability: true },
            { modal: 6, color: 'black', availability: false },
          ],
        },
        {
          size: 'l',
          color: 'black, white',
          availability: false,
          details: [
            { modal: 7, color: 'white', availability: false },
            { modal: 8, color: 'black', availability: false },
          ],
        },
      ],
    },
  ]
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const handleRowClick = (rowId: number) => {
    const isRowExpanded = expandedRows.includes(rowId)
    setExpandedRows((prevExpandedRows) => {
      if (isRowExpanded) {
        return prevExpandedRows.filter((id) => id !== rowId)
      } else {
        return [...prevExpandedRows, rowId]
      }
    })
  }

  return (
    <>
      <h1 className="mt-4 text-center font-bold text-zinc-400 mb-4">{title}</h1>
      <div className="overflow-x-auto">
        <TableTree
          striped
          bordered
          hover
          className="min-w-full bg-white divide-y divide-gray-200 border border-solid border-gray-300"
        >
          <thead className="bg-green-400 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                #
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Название
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Размерный ряд
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Редактировать
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Удалить
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700 divide-y divide-gray-200">
            {data.map((row, index) => (
              <React.Fragment key={row.id}>
                <tr onClick={() => handleRowClick(row.id)}>
                  <td className="text-left py-3 px-4">{index + 1}</td>
                  <td className="text-left py-3 px-4">{row.name}</td>
                  <td className="text-left py-3 px-4">{row.size}</td>
                  <td className="text-left py-3 px-4">
                    <Button>
                      <Image
                        src={edit}
                        alt="User Photo"
                        width="20"
                        height="20"
                      />
                    </Button>
                  </td>
                  <td className="text-left py-3 px-4">
                    <Button>
                      <Image
                        src={delet}
                        alt="User Photo"
                        width="20"
                        height="20"
                      />
                    </Button>
                  </td>
                </tr>

                {expandedRows.includes(row.id) && (
                  <>
                    <tr>
                      <td colSpan={5}>
                        <TableTree
                          striped
                          bordered
                          hover
                          className="min-w-full bg-white divide-y divide-gray-200 border border-solid border-gray-300"
                        >
                          <thead className="bg-green-400 text-white">
                            <tr>
                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                #
                              </th>
                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Размер
                              </th>
                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Цвета
                              </th>
                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Наличие
                              </th>
                            </tr>
                          </thead>

                          <tbody className="text-gray-700 divide-y divide-gray-200">
                            {row.details.map((detail, index) => (
                              <React.Fragment key={index}>
                                <tr
                                  onClick={() =>
                                    handleRowClick(row.id * 10 + index)
                                  }
                                >
                                  <td className="text-left py-3 px-4">
                                    {index + 1}
                                  </td>
                                  <td className="text-left py-3 px-4">
                                    {detail.size}
                                  </td>
                                  <td className="text-left py-3 px-4">
                                    {detail.color}
                                  </td>
                                  <td className="text-left py-3 px-4">
                                    <Image
                                      src={
                                        detail.availability
                                          ? isAvailability
                                          : isNotAvailability
                                      }
                                      alt="User Photo"
                                      width="20"
                                      height="20"
                                    />
                                  </td>
                                </tr>

                                {expandedRows.includes(row.id * 10 + index) && (
                                  <>
                                    <tr>
                                      <td colSpan={4}>
                                        <TableTree
                                          striped
                                          bordered
                                          hover
                                          className="min-w-full bg-white divide-y divide-gray-200 border border-solid border-gray-300"
                                        >
                                          <thead className="bg-green-400 text-white">
                                            <tr>
                                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                #
                                              </th>
                                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                Модель
                                              </th>
                                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                Цвет
                                              </th>
                                              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                                Наличие
                                              </th>
                                            </tr>
                                          </thead>

                                          <tbody className="text-gray-700 divide-y divide-gray-200">
                                            {detail.details.map(
                                              (innerDetail, innerIndex) => (
                                                <tr key={innerIndex}>
                                                  <td className="text-left py-3 px-4">
                                                    {innerIndex + 1}
                                                  </td>
                                                  <td className="text-left py-3 px-4">
                                                    {innerDetail.modal}
                                                  </td>
                                                  <td className="text-left py-3 px-4">
                                                    {innerDetail.color}
                                                  </td>
                                                  <td className="text-left py-3 px-4">
                                                    <Image
                                                      src={
                                                        detail.availability
                                                          ? isAvailability
                                                          : isNotAvailability
                                                      }
                                                      alt="User Photo"
                                                      width="20"
                                                      height="20"
                                                    />
                                                  </td>
                                                </tr>
                                              )
                                            )}
                                          </tbody>
                                        </TableTree>
                                      </td>
                                    </tr>
                                  </>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </TableTree>
                      </td>
                    </tr>
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </TableTree>
      </div>
    </>
  )
}
