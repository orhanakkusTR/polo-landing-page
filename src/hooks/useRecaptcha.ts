import { useRef, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const useRecaptcha = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    if (!recaptchaRef.current) {
      console.error('reCAPTCHA not initialized');
      return null;
    }

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  }, []);

  const resetRecaptcha = useCallback(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  return {
    recaptchaRef,
    executeRecaptcha,
    resetRecaptcha,
  };
};
