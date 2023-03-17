export function removeLocalItem(key: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
}

export function removeAllLocalItens(): void {
  Object.keys(localStorage).forEach((item) => {
    removeLocalItem(item);
  });
}
