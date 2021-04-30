// Generated from ./SearchGrammar2.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SearchGrammar2Listener from './SearchGrammar2Listener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0006\u001e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0005\u0002\n\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004\u0012\n",
    "\u0004\r\u0004\u000e\u0004\u0013\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004\u0019\n\u0004\f\u0004\u000e\u0004\u001c\u000b\u0004\u0003",
    "\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006\u0002\u0002\u0002\u001d",
    "\u0002\t\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002\u0002\u0002\u0006",
    "\u000f\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003",
    "\u0002\u0002\u0002\t\n\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002",
    "\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002\u0002\u0002",
    "\r\u000e\u0005\u0006\u0004\u0002\u000e\u0005\u0003\u0002\u0002\u0002",
    "\u000f\u0011\b\u0004\u0001\u0002\u0010\u0012\u0007\u0006\u0002\u0002",
    "\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u001a\u0003\u0002\u0002\u0002\u0015\u0016\f\u0004\u0002\u0002",
    "\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u0019\u0007\u0004\u0002\u0002",
    "\u0018\u0015\u0003\u0002\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002",
    "\u001b\u0007\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002",
    "\u0005\t\u0013\u001a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SearchGrammar2Parser extends antlr4.Parser {

    static grammarFileName = "SearchGrammar2.g4";
    static literalNames = [ null, "'^'" ];
    static symbolicNames = [ null, "WEIGHT", "DEC_NUMBER", "NUMBER", "PhraseLiteral" ];
    static ruleNames = [ "root", "general_expr", "bool_expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SearchGrammar2Parser.ruleNames;
        this.literalNames = SearchGrammar2Parser.literalNames;
        this.symbolicNames = SearchGrammar2Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.bool_expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    bool_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SearchGrammar2Parser.RULE_root);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SearchGrammar2Parser.PhraseLiteral) {
	            this.state = 6;
	            this.general_expr();
	        }

	        this.state = 9;
	        this.match(SearchGrammar2Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	general_expr() {
	    let localctx = new General_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SearchGrammar2Parser.RULE_general_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.bool_expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	bool_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Bool_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, SearchGrammar2Parser.RULE_bool_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 14;
	        		this.match(SearchGrammar2Parser.PhraseLiteral);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 17; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Bool_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SearchGrammar2Parser.RULE_bool_expr);
	                this.state = 19;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 20;
	                this.match(SearchGrammar2Parser.WEIGHT);
	                this.state = 21;
	                this.match(SearchGrammar2Parser.DEC_NUMBER); 
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

SearchGrammar2Parser.EOF = antlr4.Token.EOF;
SearchGrammar2Parser.WEIGHT = 1;
SearchGrammar2Parser.DEC_NUMBER = 2;
SearchGrammar2Parser.NUMBER = 3;
SearchGrammar2Parser.PhraseLiteral = 4;

SearchGrammar2Parser.RULE_root = 0;
SearchGrammar2Parser.RULE_general_expr = 1;
SearchGrammar2Parser.RULE_bool_expr = 2;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchGrammar2Parser.RULE_root;
    }

	EOF() {
	    return this.getToken(SearchGrammar2Parser.EOF, 0);
	};

	general_expr() {
	    return this.getTypedRuleContext(General_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.exitRoot(this);
		}
	}


}



class General_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchGrammar2Parser.RULE_general_expr;
    }

	bool_expr() {
	    return this.getTypedRuleContext(Bool_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.enterGeneral_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.exitGeneral_expr(this);
		}
	}


}



class Bool_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchGrammar2Parser.RULE_bool_expr;
    }

	PhraseLiteral = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SearchGrammar2Parser.PhraseLiteral);
	    } else {
	        return this.getToken(SearchGrammar2Parser.PhraseLiteral, i);
	    }
	};


	bool_expr() {
	    return this.getTypedRuleContext(Bool_exprContext,0);
	};

	WEIGHT() {
	    return this.getToken(SearchGrammar2Parser.WEIGHT, 0);
	};

	DEC_NUMBER() {
	    return this.getToken(SearchGrammar2Parser.DEC_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.enterBool_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchGrammar2Listener ) {
	        listener.exitBool_expr(this);
		}
	}


}




SearchGrammar2Parser.RootContext = RootContext; 
SearchGrammar2Parser.General_exprContext = General_exprContext; 
SearchGrammar2Parser.Bool_exprContext = Bool_exprContext; 
