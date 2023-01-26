const randomString = (length) => {
  const banco = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let random = ''
  for (let i = 0; i < length; i++) {
    random += banco.charAt(Math.floor(Math.random() * banco.length))
  }
  return random
}

console.log(randomString(8))
