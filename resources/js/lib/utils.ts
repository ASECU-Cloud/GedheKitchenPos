import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function rupiahConverter(moneyAmount: number): string {
    return moneyAmount.toLocaleString('id-ID');
}
