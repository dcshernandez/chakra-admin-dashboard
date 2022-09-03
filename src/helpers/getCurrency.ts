const getCurrency = (amount:number) => {
  const formatter = new Intl.NumberFormat('fil-PH', {
    style: 'currency',
    currency: 'PHP',
  })
  return formatter.format(amount)
}

export default getCurrency
