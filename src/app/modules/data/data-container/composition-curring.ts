import { compose } from '@ngrx/store';

export class FunctionProgramming {
    comp() {
        const c = compose(this.compA, this.compB);
        const r = c('max');
    };
    compA(name: string): any {
        console.log('compA: ', name);
        return 'compA: ' + name;
    }
    compB(name: string): any {
        console.log('compB: ', name);
        return 'compB: ' + name;
    }
    // ---------fnCCurring------- //
    fnCurring() {
        this.fnA(this.fnB);
    };

    fnA(fnb: (name: any) => {}) {
        const b = fnb('b');
        console.log('fnA: ', b);
        return b;
    };
    fnB(name: string) {
        console.log('fnb: ', name);
        return 'b fn - ' + 'name:' + name;
    };
    // ---------fnCCurring------- //
    // ---------fnComposition------- //
    fnComposition() {
        // curring 1
        // this.setA('a')('b');
        // curring 2
        const a = this.setA('a');
        a('b');
    };
    setA(name: string) {
        console.log('setA', name);
        return (nameb: string) => {
            this.setB(nameb);
        };
    };
    setB(nameb: string) {
        console.log('setB:', nameb);
    };
    // ---------fnComposition------- //
}