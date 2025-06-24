
export function isUpcoming(dateStr) {
  const eventDate = new Date(dateStr);
  const today = new Date();

  eventDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return eventDate >= today;
}
