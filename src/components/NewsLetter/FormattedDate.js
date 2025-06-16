import { useEffect, useState } from 'react';

export default function FormattedDate({ date, formatOptions }) {
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    if (date) {
      const inputDate = new Date(date);
      const today = new Date();

      inputDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (inputDate >= today) {
        const result = new Date(date).toLocaleString('en-US', formatOptions || {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        });
        setFormatted(result);
      } else {
        setFormatted(''); // Do not show past dates
      }
    }
  }, [date, formatOptions]);

  return <>{formatted}</>;
}
