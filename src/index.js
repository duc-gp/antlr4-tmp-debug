import React from 'react';
import ReactDOM from 'react-dom';
import * as antlr4 from 'antlr4';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchGrammar2Lexer from './antlr4/SearchGrammar2Lexer'
import SearchGrammar2Parser from './antlr4/SearchGrammar2Parser'

class SyntaxProcessorErrorHandler extends antlr4.error.ErrorListener {
    _errorEntities = [];

    /**
     *
     * @return {Array<SyntaxEntity>}
     */
    get errorEntities() {
        return this._errorEntities;
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      console.log(msg);
    }
}

function main(input) {
  console.log(`INPUT: ${input}`);
  const errorHandler = new SyntaxProcessorErrorHandler();
  const chars = new antlr4.InputStream(input);
  const lexer = new SearchGrammar2Lexer(chars);
  lexer.addErrorListener(errorHandler);

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new SearchGrammar2Parser(tokens);

  parser.buildParseTrees = true;
  parser.addErrorListener(errorHandler);

  const tree = parser.root();
  console.log("TREE: ");
  console.log(tree);
}

main('foobar^4')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
