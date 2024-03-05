import { ReactNode } from 'react'

export interface KeyProps {
  children: ReactNode
}

export interface ShowModelProps {
  ShowModel: (e: any) => void
  isOpen: boolean
}

export interface ModelProps extends ShowModelProps {
  inputChange: (e: any) => void
}

export interface LoginProps {
  login: string | null
  password: string | null
}

export interface LoginRegProps extends LoginProps {
  firstName: string | null
  lastName: string | null
  fullName: string | null
}
