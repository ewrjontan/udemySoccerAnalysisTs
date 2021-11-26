"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarget, filename) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this.filename = filename;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output, this.filename);
    }
}
exports.Summary = Summary;
