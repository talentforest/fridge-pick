import { useState } from 'react';

export type AppError<T = unknown> = {
  type: 'duplicate' | 'validation';
  message: string;
  item?: T;
};

type ErrorRule<T> = {
  condition: boolean;
  error: AppError<T>;
};

export const useErrorHandler = <T>() => {
  const [error, setError] = useState<AppError<T> | null>(null);

  const handleError = (rules: ErrorRule<T>[]) => {
    const firstError = rules.find((rule) => rule.condition)?.error;

    if (!firstError) {
      setError(null);
      return false;
    }

    setError(firstError);
    return true;
  };

  const clearError = () => setError(null);

  return {
    error,
    handleError,
    clearError,
  };
};
