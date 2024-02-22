import { ReactNode } from 'react'

export interface KeyProps {
  children: ReactNode
}

export interface ShowModelProps {
  ShowModel: () => void
}

export interface ModelProps extends ShowModelProps {
  isOpen: boolean
}
