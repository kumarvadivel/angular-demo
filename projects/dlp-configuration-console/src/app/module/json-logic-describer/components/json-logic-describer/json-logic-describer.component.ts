import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-logic-describer',
  templateUrl: './json-logic-describer.component.html',
  styleUrls: ['./json-logic-describer.component.scss']
})
export class JsonLogicDescriberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

   describeJSONLogic(jsonLogic, customOperators = {}, customMethodDescriptionFn?) {
    if (typeof jsonLogic === 'object') {
      const operator = Object.keys(jsonLogic)[0];
      const operands = jsonLogic[operator];
      if (operator in customOperators) {
        const customOperatorFn = customOperators[operator];
        return customOperatorFn(operands);
      }
      switch (operator) {
        case '==':
          return `Check if ${this.describeJSONLogic(operands[0])} is equal to ${this.describeJSONLogic(operands[1])}.\n`;
        case '!=':
          return `Check if ${this.describeJSONLogic(operands[0])} is not equal to ${this.describeJSONLogic(operands[1])}.\n`;
        case '>':
          return `Check if ${this.describeJSONLogic(operands[0])} is greater than ${this.describeJSONLogic(operands[1])}.\n`;
        case '<':
          return `Check if ${this.describeJSONLogic(operands[0])} is less than ${this.describeJSONLogic(operands[1])}.\n`;
        case '>=':
          return `Check if ${this.describeJSONLogic(operands[0])} is greater than or equal to ${this.describeJSONLogic(operands[1])}.\n`;
        case '<=':
          return `Check if ${this.describeJSONLogic(operands[0])} is less than or equal to ${this.describeJSONLogic(operands[1])}.\n`;
        case 'and':
          return `Both conditions must be true: ${operands.map(op => this.describeJSONLogic(op)).join(' and ')}.\n`;
        case 'or':
          return `Either of the conditions must be true: ${operands.map(op => this.describeJSONLogic(op)).join(' or ')}.\n`;
        case 'not':
          return `Negate the condition: ${this.describeJSONLogic(operands)}.\n`;
        case 'all':
          return `All conditions must be true: ${operands.map(op => this.describeJSONLogic(op)).join(' and ')}.\n`;
        case 'none':
          return `None of the conditions must be true: ${operands.map(op => this.describeJSONLogic(op)).join(' and ')}.\n`;
        case 'if':
          if (operands.length === 3) {
            return `If ${this.describeJSONLogic(operands[0])}, then ${this.describeJSONLogic(operands[1])}, else ${this.describeJSONLogic(operands[2])}.\n`;
          } else {
            return `Invalid "if" operator. It should have three operands: condition, true branch, and false branch.\n`;
          }
        case 'in':
          return `Check if ${this.describeJSONLogic(operands[0])} is in the list [${operands[1].map(val => this.describeJSONLogic(val)).join(', ')}].\n`;
        case '+':
          return `Add ${this.describeJSONLogic(operands[0])} to ${this.describeJSONLogic(operands[1])}.\n`;
        case '-':
          return `Subtract ${this.describeJSONLogic(operands[1])} from ${this.describeJSONLogic(operands[0])}.\n`;
        case '*':
          return `Multiply ${this.describeJSONLogic(operands[0])} by ${this.describeJSONLogic(operands[1])}.\n`;
        case '/':
          return `Divide ${this.describeJSONLogic(operands[0])} by ${this.describeJSONLogic(operands[1])}.\n`;
        case '%':
          return `Get the remainder when ${this.describeJSONLogic(operands[0])} is divided by ${this.describeJSONLogic(operands[1])}.\n`;
        case 'concat':
          return `Concatenate ${this.describeJSONLogic(operands[0])} and ${this.describeJSONLogic(operands[1])}.\n`;
        case 'str_contains':
          return `Check if ${this.describeJSONLogic(operands[0])} contains ${this.describeJSONLogic(operands[1])}.\n`;
        case 'var':
          return `Value of variable "${operands}"\n`;
        case 'map':
          return `Apply a function to each element of an array: ${this.describeJSONLogic(operands[1])}, mapped by ${this.describeJSONLogic(operands[0])}.\n`;
        case 'reduce':
          return `Reduce an array to a single value using a function: ${this.describeJSONLogic(operands[2])}, reduced by ${this.describeJSONLogic(operands[0])}. Initial value: ${this.describeJSONLogic(operands[1])}.\n`;
        case 'filter':
          return `Filter an array using a function: ${this.describeJSONLogic(operands[1])}, filtered by ${this.describeJSONLogic(operands[0])}.\n`;
        default:
          return `Value returned from ${operator} operator :${this.describeJSONLogic(operands[1])} and ${this.describeJSONLogic(operands[0])}\n`
          // if (operator in customMethodDescriptionFn) {
          //   return customMethodDescriptionFn(operator, operands);
          // }
          // return `Unsupported operation: ${operator}.`;
      }
    } else {
      return JSON.stringify(jsonLogic); // Return raw values as-is
    }
  }
  
  // Example usage with the "if" operator:
  
}
