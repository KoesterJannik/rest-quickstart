export function generateRandomEmail(length: number) {
  return `${Math.random()
    .toString(36)
    .substring(2, 2 + length)}@example.com`;
}

export function generateRandomPassword(length: number) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
