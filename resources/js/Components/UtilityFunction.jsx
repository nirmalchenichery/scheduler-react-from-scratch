import dayjs from "dayjs";

// Month 0 - 11
export function getMonth(month = dayjs().month()) {
    
    month = Math.floor(month);
    const year = dayjs().year();

    /*
    Get the day of the week.
    Returns numbers from 0 (Sunday) to 6 (Saturday).
    dayjs().day()// 0-6*/
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    
    let currentMonthCount = 0 - firstDayOfTheMonth;

    // 5 rows and 7 colums in month [2d]
    const daysMatrix = new Array(5).fill([]).map(() => {
        
        return new Array(7).fill(null).map(() => {

            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}
