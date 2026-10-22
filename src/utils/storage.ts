import { UserAttempt } from '../types';

const STORAGE_PREFIX = 'stet_test_series_';

export function getStoredAttempt(testId: string): UserAttempt | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}attempt_${testId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveStoredAttempt(attempt: UserAttempt): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}attempt_${attempt.testId}`, JSON.stringify(attempt));
  } catch (e) {
    console.error('Failed to save attempt:', e);
  }
}

export function getAllAttempts(): Record<string, UserAttempt> {
  const attempts: Record<string, UserAttempt> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`${STORAGE_PREFIX}attempt_`)) {
        const testId = key.replace(`${STORAGE_PREFIX}attempt_`, '');
        const data = getStoredAttempt(testId);
        if (data) {
          attempts[testId] = data;
        }
      }
    }
  } catch (e) {
    console.error('Failed to load attempts:', e);
  }
  return attempts;
}

export function clearAttempt(testId: string): void {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}attempt_${testId}`);
  } catch (e) {
    console.error('Failed to clear attempt:', e);
  }
}

export function resetAllData(): void {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
  } catch (e) {
    console.error('Failed to reset all data:', e);
  }
}
