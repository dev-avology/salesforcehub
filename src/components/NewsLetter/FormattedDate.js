import { useEffect, useState } from 'react';

export default function FormattedDate({ date, formatOptions }) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    if (date) {
      const result = new Date(date).toLocaleString('en-US', formatOptions || {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      });
      setFormatted(result);
    }
  }, [date, formatOptions]);

  return <>{formatted}</>;
}