export default class RiffService {
    static getMonthNameByNumber(number: number) {
        switch (number) {
          case (1): return "Jan"
          case (2): return "Feb"
          case (3): return "Mar"
          case (4): return "Apr"
          case (5): return "May"
          case (6): return "Jun"
          case (7): return "Jul"
          case (8): return "Aug"
          case (9): return "Sep"
          case (10): return "Oct"
          case (11): return "Nov"
          case (12): return "Dev"
        }
    }
  
    static formatDisplayDate (date: string): string {
        const [year, month, day] = date.split('-')
        return `${day} ${this.getMonthNameByNumber(parseInt(month))} ${year}`
    }

    static convertDateToObject(date: string) {
        const [year, month, day] = date.split('-')
        return { "day": parseInt(day), "month": parseInt(month), "year": parseInt(year) }
    }

    static convertTimeToTobject(time: string) {
        const [hour, minute] = time.split(':')
        let convertedHour = parseInt(hour)
        let meridiem = "am"
        if (convertedHour > 12) {
            convertedHour = convertedHour - 12 
            meridiem = "pm"
        }
        return { "hour": convertedHour, "minute": minute, "meridiem": meridiem }
    }
}