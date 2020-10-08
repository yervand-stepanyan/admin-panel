function firstLetterUpperCase(str) {
  if (str && typeof str === 'string') {
    return str.length > 1
      ? str[0].toUpperCase() + str.slice(1)
      : str[0].toUpperCase();
  }

  return str;
}

export default firstLetterUpperCase;
