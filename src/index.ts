import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


//Create an object that satisfies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');


//Create an instance of MatchReader and pass in something satisfying the 
//'DataReader' interface
//const matchReader = new MatchReader(csvFileReader);


//for use with static method
const matchReader = MatchReader.fromCsv('football.csv');


matchReader.load();

/*const summary = new Summary(
    new WinsAnalysis('Man United'),
    //new ConsoleReport()
    new HtmlReport()
);*/

//using static method
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
