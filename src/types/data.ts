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
