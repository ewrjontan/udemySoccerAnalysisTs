import fs from 'fs';

export abstract class CsvFileReader<TypeOfData> {
    //starts with empty array
    data: TypeOfData[] = [];
    
    constructor(public filename: string){}

    abstract mapRow(row: string[]): TypeOfData;

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
            )
            .map(this.mapRow);
    }

}