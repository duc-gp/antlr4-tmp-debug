// Generated from ./SearchGrammar2.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0006$\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0013\n",
    "\u0003\u0005\u0003\u0015\n\u0003\u0003\u0004\u0006\u0004\u0018\n\u0004",
    "\r\u0004\u000e\u0004\u0019\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0007\u0006 \n\u0006\f\u0006\u000e\u0006#\u000b\u0006\u0002\u0002",
    "\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0002\u0003",
    "\u0002\u0005\u0003\u00022;\t\u0002\u000b\f\u000e\u000f\"\"$$*,^^``\t",
    "\u0002\u000b\f\u000e\u000f\"\"$$*+^^``\u0002&\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002",
    "\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002",
    "\u0002\t\u001b\u0003\u0002\u0002\u0002\u000b\u001d\u0003\u0002\u0002",
    "\u0002\r\u000e\u0007`\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002",
    "\u000f\u0014\u0005\u0007\u0004\u0002\u0010\u0012\u00070\u0002\u0002",
    "\u0011\u0013\u0005\u0007\u0004\u0002\u0012\u0011\u0003\u0002\u0002\u0002",
    "\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0015\u0003\u0002\u0002\u0002",
    "\u0014\u0010\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0006\u0003\u0002\u0002\u0002\u0016\u0018\t\u0002\u0002\u0002",
    "\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\b\u0003\u0002\u0002\u0002\u001b\u001c\u0005\u000b\u0006\u0002",
    "\u001c\n\u0003\u0002\u0002\u0002\u001d!\n\u0003\u0002\u0002\u001e \n",
    "\u0004\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 #\u0003\u0002",
    "\u0002\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002",
    "\"\f\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002\u0007\u0002\u0012",
    "\u0014\u0019!\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SearchGrammar2Lexer extends antlr4.Lexer {

    static grammarFileName = "SearchGrammar2.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'^'" ];
	static symbolicNames = [ null, "WEIGHT", "DEC_NUMBER", "NUMBER", "PhraseLiteral" ];
	static ruleNames = [ "WEIGHT", "DEC_NUMBER", "NUMBER", "PhraseLiteral", 
                      "TermCharacters" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SearchGrammar2Lexer.EOF = antlr4.Token.EOF;
SearchGrammar2Lexer.WEIGHT = 1;
SearchGrammar2Lexer.DEC_NUMBER = 2;
SearchGrammar2Lexer.NUMBER = 3;
SearchGrammar2Lexer.PhraseLiteral = 4;



