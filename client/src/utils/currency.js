const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbol: '$'
  }
  
 export const currencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)
  
    const [currency, decimal] = value.split('.')
    if (decimal==0) {return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}`}
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
  }