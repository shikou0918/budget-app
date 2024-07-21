export interface RootState {
  version: string
}

export interface RecordTransactionState {
  recordTransactions: RecordTransaction[];
}

export interface RecordTransaction {
  id: number
  /** 収支の種類 */
  type: string
  /** 収入 */
  income: number
  /** 支出 */
  expenditure: number
  /** 日付 */
  date: string
}