import { retainFL6Digits } from 'src/utils/stringHelpers'
import HistoryTable, { Column } from 'src/views/components/HistoryTable'

import Recycle from '../recycle'

const columns: Column[] = [
  { id: 'transactionType', label: 'Transaction Type', minWidth: 170 },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 100,
    format: value => `${value} GGR`,
  },
  {
    id: 'transactionHash',
    label: 'Transaction Hash',
    minWidth: 170,
    align: 'left',
    format: value => retainFL6Digits(value as string),
  },
]

const rows = [
  {
    transactionType: 'in',
    amount: '100000',
    transactionHash:
      '0x88bcdc750c04374f94ebbcf67b6bcf8fcaab118b6fd5e62e8e4b19514949d220',
  },
  {
    transactionType: 'in',
    amount: '550000',
    transactionHash:
      '0x88bcdc750c04374f94ebbcf67b6bcf8fcaab118b6fd5e62e8e4b19514949d221',
  },
  {
    transactionType: 'in',
    amount: '100000',
    transactionHash:
      '0x88bcdc750c04374f94ebbcf67b6bcf8fcaab118b6fd5e62e8e4b19514949d222',
  },
  {
    transactionType: 'out',
    amount: '100000',
    transactionHash:
      '0x88bcdc750c04374f94ebbcf67b6bcf8fcaab118b6fd5e62e8e4b19514949d223',
  },
  {
    transactionType: 'out',
    amount: '500000',
    transactionHash:
      '0x88bcdc750c04374f94ebbcf67b6bcf8fcaab118b6fd5e62e8e4b19514949d224',
  },
]

function History() {
  return <>
    <Recycle />
    <HistoryTable columns={columns} rows={rows} />
  </>

}
export default History
