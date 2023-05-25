import { useState } from 'react';

type CopyReturnType = (text: string) => Promise<boolean>;

export const useCopyToClipboard = (): [string, CopyReturnType] => {
  const [copyText, setCopyText] = useState<string>('');

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      setCopyText('');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopyText(text);
      return true;
    } catch (error) {
      setCopyText('');
      return false;
    }
  };

  return [copyText, copy];
};
