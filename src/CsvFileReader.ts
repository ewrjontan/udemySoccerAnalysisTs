import fs from 'fs';



export class CsvFileReader {
    //starts with empty array
    data: string[][] = [];
    
    constructor(public filename: string){}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
            // tells fs readFiile Sync what type of file information to expect
                encoding: 'utf-8'
            }).split('\n')
            .map(
                (row: string): string[] => {
                    return row.split(',');
                }
            );
    }
}