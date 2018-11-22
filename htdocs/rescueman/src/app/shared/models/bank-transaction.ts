export class BankTransaction {
    id: number;
    name: string;
    
    transaction_type: string;
    type: string;
    from_account: number;
    to_account: number;
    from: string;
    to: string;
    regarding: string;
    due_date: Date;
    transaction_date: Date;
    amount: number;
    method: string;
    status: string;
    description: string;

    created_by: number;
    updated_by: number;
    statecode: string;
    created_at: Date;
    updated_at: Date;
}
