import { MatchData } from './MatchData';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string, inputFilename: string): void;
}



export class Summary {
    constructor(
        public analyzer: Analyzer, 
        public outputTarget: OutputTarget,
        public filename: string
        ) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output, this.filename);
    }
    
} 

