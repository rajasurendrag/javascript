function slice(string, start, end) {
  if (start === end) {
    return string[end];
  }
  
  return slice(string, start, end - 1) + string[end] ;
}