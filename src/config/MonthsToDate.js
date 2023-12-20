// const getDayDateArrayForCurrentMonth = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     const firstDayOfMonth = new Date(year, month, 1);
//     const lastDayOfMonth = new Date(year, month + 1, 0);

//     const dayDateArray = [];

//     for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
//         const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
//         const dayOfMonth = date.getDate();

//         dayDateArray.push({ day, date: dayOfMonth });
//     }

//     return dayDateArray;
// };