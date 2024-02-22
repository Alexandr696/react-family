import { FC } from 'react'
import { KeyProps } from '../../types/data'

export const Main: FC<KeyProps> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}
