
export function parse(date_time: string): string {
  try {
    const date = new Date(date_time);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    return "";
  }
}

export function diff(start_date: Date, end_date: Date): string {
  const diff = end_date.getTime() - start_date.getTime();
  let days = diff / (1000 * 60 * 60 * 24);
  let months = 0;
  let years = 0;
  
  if (days >= 365) {
    years = Math.floor(days / 365);
    days %= 365;
    months = Math.floor((days / 365) * 12);
  } else {
    months = Math.floor((days / 365) * 12);
  }

  let str_year = years > 1 ? `${years} anos` : `${years} ano`;
  let str_month = months > 1 ? `${months} meses` : `${months} mês`;
  if (years === 0) str_year = "";
  if (months === 0) str_month = "";
  return str_year.concat(" ", str_month);
}

export function toDate(date_time: string | null): Date | null {
  try {
    return date_time ? new Date(date_time) : null;
  } catch (error) {
    return null;
  }
}

export function yearsInterval(start_date: string, end_date: string) {
  const start = toDate(start_date)?.getFullYear();
  const end = toDate(end_date)?.getFullYear();
  return `${start} - ${end ?? 'atualmente'}`;
}