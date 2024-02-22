import { FC } from 'react'
interface styleProps {
  button: string
}
const style: styleProps = require('./Button.module.css').default
interface ButtonProps {
  onClick: () => void
  children: string
}
export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}
