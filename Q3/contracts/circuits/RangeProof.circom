pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;

    component low = LessEqThan(n);
    component high = GreaterEqThan(n);
	
    //lower bound has to be lower than in, so low should output 1 
    low.in[0] <== range[0];
    low.in[1] <== in;

    //high should output 1, the upper bound should be greater than the number
    high.in[0] <== range[1];
    high.in[1] <== in;

    out <== low.out*high.out ; 


}
