import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


const inputFilename = 'football.csv';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader(inputFilename);


//Create an instance of MatchReader and pass in something satisfying the 
//'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    //new ConsoleReport(),
    new HtmlReport(),
    inputFilename
);

summary.buildAndPrintReport(matchReader.matches);
