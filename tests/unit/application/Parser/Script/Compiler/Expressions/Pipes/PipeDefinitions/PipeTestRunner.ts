import 'mocha';
import { expect } from 'chai';
import { IPipe } from '@/application/Parser/Script/Compiler/Expressions/Pipes/IPipe';

interface ITestCase {
    readonly name: string;
    readonly input: string;
    readonly expectedOutput: string;
}

export function runPipeTests(sut: IPipe, testCases: ITestCase[]) {
    for (const testCase of testCases) {
        it(testCase.name, () => {
            // act
            const actual = sut.apply(testCase.input);
            // assert
            expect(actual).to.equal(testCase.expectedOutput);
        });
    }
}
