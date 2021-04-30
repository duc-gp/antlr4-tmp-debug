grammar SearchGrammar2;

root
    :   general_expr? EOF
    ;

general_expr
    :   bool_expr
    ;


// Order of expressions is important, since NOT > AND > OR (boolean logic)
bool_expr
    :   bool_expr WEIGHT DEC_NUMBER
    |   (PhraseLiteral)+
    ;

WEIGHT: '^';

DEC_NUMBER: NUMBER ('.' NUMBER?)?;

NUMBER: [0-9]+;

PhraseLiteral
    :   TermCharacters
    ;

fragment
TermCharacters
    : ~["\\ \t\r\u000C\n()^*] ~["\\ \t\r\u000C\n()^]*
    ;

