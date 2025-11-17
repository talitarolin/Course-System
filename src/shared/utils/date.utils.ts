export class DateUtils {
  static formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
    const d = new Date(date);
    
    if (format === 'short') {
      return d.toLocaleDateString('pt-BR');
    }
    
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  static formatDateTime(date: Date): string {
    return new Date(date).toLocaleString('pt-BR');
  }

  static isDateInFuture(date: Date): boolean {
    return new Date(date) > new Date();
  }

  static isDateInPast(date: Date): boolean {
    return new Date(date) < new Date();
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static differenceInDays(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
  }

  static isValidDateRange(startDate: Date, endDate: Date): boolean {
    return new Date(startDate) < new Date(endDate);
  }

  static parseToISO(date: string | Date): string {
    return new Date(date).toISOString();
  }
}