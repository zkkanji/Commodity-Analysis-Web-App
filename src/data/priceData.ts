// types can be imported and used only by TypeScript
import type { PricePoint } from '../types'

// makes array of PricePoint object to be exported into tsx files
export const priceData: PricePoint[] = [
    { date: 'January 2025', price: 4.5 },
    { date: 'February 2025', price: 4.75 },
    { date: 'March 2025', price: 4.9 },
    { date: 'April 2025', price: 5.2 },
]