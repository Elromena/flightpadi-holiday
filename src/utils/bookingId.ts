// Generate a unique booking ID with format: FP-YYMM-XXXXX
// where FP = FlightPadi, YY = year, MM = month, XXXXX = random number
export function generateBookingId(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  
  return `FP-${year}${month}-${random}`;
}
