import moment from 'moment';

export default (expenses, {text, sort, startDate, endDate}) => {

    return expenses.filter((expense) => {
       // console.log(expense);
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sort === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sort === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};