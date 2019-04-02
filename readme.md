### Purposes

Safe run functions with params (or not).

### Installation

```sh
$ npm install fn-safe-run
```

### Usage

| Method         | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| checkAndRun    | Checking and run first param if it is a function. Other parameters are arguments to the passed function. |
| checkAndRunLog | Same as checkAndRun but logging if the first param is not a function (Use for debugging).                |

### Example

```sh
import { checkAndRun, checkAndRunLog } from 'fn-safe-run';
... 
{ 
  const func = console.log;
  const obj = {hello: 'world'};

  checkAndRun(func, 12345); // Call console.log with param 12345
  checkAndRun(obj); // Nothing will happen :)
  checkAndRunLog(obj, 12345); // Return in console: 'Argument [object Object] is not a function'
}
```
