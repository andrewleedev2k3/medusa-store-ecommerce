import Cart from '@/types/cart'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const roundNum2 = (number: number) => Math.round((number + Number.EPSILON) * 100) / 100
