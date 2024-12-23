
export interface ExpenseProps {
    name: string
    price: string
    amount: number
    data: string
    description: string
};

export interface ExpenseDeleteProps {
    id: string

};

export interface ExpenseUpdateProps {
    id: string
    name: string
    price: string
    amount: number
    data: string
    description: string
};