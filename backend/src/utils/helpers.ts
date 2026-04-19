/**
 * Omit specified keys from an object (useful for stripping password before sending user data).
 */
export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result as Omit<T, K>
}

/**
 * Paginate query results.
 */
export const paginate = (page: number, limit: number): { take: number; skip: number } => ({
  take: Math.min(limit, 100),
  skip: (page - 1) * limit,
})

/**
 * Format a date to YYYY-MM-DD.
 */
export const formatDate = (date: Date): string => date.toISOString().split('T')[0]

/**
 * Sanitize a string to prevent basic injection (trim + strip script tags).
 */
export const sanitizeString = (str: string): string =>
  str.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

/**
 * Generate a random 6-digit OTP.
 */
export const generateOtp = (): string => Math.floor(100000 + Math.random() * 900000).toString()
