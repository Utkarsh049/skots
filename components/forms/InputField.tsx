import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Input } from '../ui/input'

const InputField = ({name,label,placeholder,type="text",register,error,validation,disabled,value}:FormInputProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='text-sm font-medium text-gray-400'>
          {label}
        </Label>
        <Input type={type} id={name} placeholder={placeholder} {...register(name, validation)} disabled={disabled} value={value} />
        {error && <p className='text-xs text-red-500 mt-1'>{error.message}</p>}
    </div>
  )
}

export default InputField