// Generated from ./SearchGrammar2.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0007F\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001d",
    "\n\u0003\u0005\u0003\u001f\n\u0003\u0003\u0004\u0006\u0004\"\n\u0004",
    "\r\u0004\u000e\u0004#\u0003\u0005\u0003\u0005\u0005\u0005(\n\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005,\n\u0005\u0003\u0006\u0006\u0006/\n\u0006",
    "\r\u0006\u000e\u00060\u0003\u0007\u0003\u0007\u0007\u00075\n\u0007\f",
    "\u0007\u000e\u00078\u000b\u0007\u0003\b\u0003\b\u0005\b<\n\b\u0003\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0002",
    "\r\u0002\u000f\u0002\u0011\u0002\u0013\u0007\u0015\u0002\u0003\u0002",
    "\b\u0003\u00022;\t\u0002\u000b\f\u000e\u000f\"\"$$*,^^``\t\u0002\u000b",
    "\f\u000e\u000f\"\"$$*+^^``\u0004\u0002$$^^\n\u0002$$))^^ddhhppttvv\u0005",
    "\u0002\u000b\f\u000e\u000f\"\"\u0002H\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002\u0002",
    "\u0002\u0007!\u0003\u0002\u0002\u0002\t+\u0003\u0002\u0002\u0002\u000b",
    ".\u0003\u0002\u0002\u0002\r2\u0003\u0002\u0002\u0002\u000f;\u0003\u0002",
    "\u0002\u0002\u0011=\u0003\u0002\u0002\u0002\u0013@\u0003\u0002\u0002",
    "\u0002\u0015D\u0003\u0002\u0002\u0002\u0017\u0018\u0007`\u0002\u0002",
    "\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001e\u0005\u0007\u0004\u0002",
    "\u001a\u001c\u00070\u0002\u0002\u001b\u001d\u0005\u0007\u0004\u0002",
    "\u001c\u001b\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002",
    "\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u001a\u0003\u0002\u0002\u0002",
    "\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u0006\u0003\u0002\u0002\u0002",
    " \"\t\u0002\u0002\u0002! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002",
    "\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\b\u0003",
    "\u0002\u0002\u0002%\'\u0007$\u0002\u0002&(\u0005\u000b\u0006\u0002\'",
    "&\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002),\u0007$\u0002\u0002*,\u0005\r\u0007\u0002+%\u0003\u0002\u0002",
    "\u0002+*\u0003\u0002\u0002\u0002,\n\u0003\u0002\u0002\u0002-/\u0005",
    "\u000f\b\u0002.-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020",
    ".\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021\f\u0003\u0002\u0002",
    "\u000226\n\u0003\u0002\u000235\n\u0004\u0002\u000243\u0003\u0002\u0002",
    "\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u00027\u000e\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u0002",
    "9<\n\u0005\u0002\u0002:<\u0005\u0011\t\u0002;9\u0003\u0002\u0002\u0002",
    ";:\u0003\u0002\u0002\u0002<\u0010\u0003\u0002\u0002\u0002=>\u0007^\u0002",
    "\u0002>?\t\u0006\u0002\u0002?\u0012\u0003\u0002\u0002\u0002@A\u0005",
    "\u0015\u000b\u0002AB\u0003\u0002\u0002\u0002BC\b\n\u0002\u0002C\u0014",
    "\u0003\u0002\u0002\u0002DE\t\u0007\u0002\u0002E\u0016\u0003\u0002\u0002",
    "\u0002\u000b\u0002\u001c\u001e#\'+06;\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SearchGrammar2Lexer extends antlr4.Lexer {

    static grammarFileName = "SearchGrammar2.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'^'" ];
	static symbolicNames = [ null, "WEIGHT", "DEC_NUMBER", "NUMBER", "PhraseLiteral", 
                          "SKIP_RULE" ];
	static ruleNames = [ "WEIGHT", "DEC_NUMBER", "NUMBER", "PhraseLiteral", 
                      "StringCharacters", "TermCharacters", "StringCharacter", 
                      "EscapeSequence", "SKIP_RULE", "WS" ];

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
SearchGrammar2Lexer.SKIP_RULE = 5;



