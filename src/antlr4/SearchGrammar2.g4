grammar SearchGrammar2;

root
    :   general_expr? EOF
    ;

general_expr
    :   bool_expr
    ;

bool_expr
    :   bool_expr WEIGHT DEC_NUMBER
    |   (PhraseLiteral | DEC_NUMBER)+
    ;

WEIGHT: '^';

DEC_NUMBER: NUMBER ('.' NUMBER?)?;

NUMBER: [0-9]+;

PhraseLiteral
    :   '"' StringCharacters? '"'
    |   TermCharacters
    ;

fragment
StringCharacters
    :   StringCharacter+
    ;

fragment
TermCharacters
    : ~["\\ \t\r\u000C\n()^*] ~["\\ \t\r\u000C\n()^]*
    ;

fragment
StringCharacter
    :   ~["\\]
    |   EscapeSequence
    ;

fragment
EscapeSequence
    :   '\\' [btnfr"'\\]
    ;

SKIP_RULE
    : WS -> skip
    ;

fragment
WS
    :  (' '|'\r'|'\t'|'\u000C'|'\n')
    ;
