import React from 'react'
import { XCircle } from 'lucide-react'

interface ErrorMessageProps {
  message: string
  onClose: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
      <strong className="font-bold">Fehler: </strong>
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <XCircle className="h-6 w-6 text-red-500 cursor-pointer" />
      </span>
    </div>
  )
}

