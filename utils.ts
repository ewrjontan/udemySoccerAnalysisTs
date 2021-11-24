export const dateStringToDate = (dateString: string): Date => {
    // expected input: 28/10/2018 and expected output ['28', '10', '2018']
    const dateParts = dateString.split('/')
    .map((value: string): number => {
        return parseInt(value);
    }); 

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};