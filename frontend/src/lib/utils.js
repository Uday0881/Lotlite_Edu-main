import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn — merges class names, resolving Tailwind conflicts
 * Usage: cn('bg-red-500', condition && 'bg-blue-500')
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
