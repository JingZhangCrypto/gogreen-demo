export const TOKEN = {
  balance: '100'
}

export function addBalance(num: string) {
  TOKEN.balance = String(Number(TOKEN.balance) + Number(num))
}