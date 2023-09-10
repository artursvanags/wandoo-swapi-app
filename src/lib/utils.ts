import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function Cap(i:string){
  return i.charAt(0).toUpperCase() + i.slice(1)
}