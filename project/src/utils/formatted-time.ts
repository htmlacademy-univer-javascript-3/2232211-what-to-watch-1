export function toHourAndMinute(timeInMinutes: number) {
  if (timeInMinutes < 60) {
    return `${timeInMinutes}m`;
  }
  if (timeInMinutes % 60 === 0) {
    return `${Math.floor(timeInMinutes / 60)}h`;
  }
  return `${Math.floor(timeInMinutes / 60)}h ${timeInMinutes % 60}m`;
}
