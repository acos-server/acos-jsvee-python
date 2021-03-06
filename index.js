var JSVEEPython = function() {};

JSVEEPython.addToHead = function(params) {
  return '<script src="/static/jsvee-python/JSVEE-python-min.js" type="text/javascript"></script>\n' +
    '<script src="/static/jsvee-python/JSVEE-content-min.js" type="text/javascript"></script>\n' +
    '<link href="/static/jsvee-python/jsvee-python.css" rel="stylesheet">\n';
};

JSVEEPython.addToBody = function(params) {
  return '';
};

JSVEEPython.initialize = function(req, params, handlers, cb) {

  // Initialize the content package
  params.headContent += JSVEEPython.addToHead(params);
  params.bodyContent += JSVEEPython.addToBody(params);

  cb();

};

JSVEEPython.register = function(handlers) {
  handlers.contentPackages['jsvee-python'] = JSVEEPython;
  handlers.contentTypes.jsvee.installedContentPackages.push(JSVEEPython);
};

JSVEEPython.namespace = 'jsvee-python';
JSVEEPython.contentTypeNamespace = 'jsvee';
JSVEEPython.packageType = 'content';

JSVEEPython.meta = {
  'name': 'jsvee-python',
  'shortDescription': 'JSVEE content package containing Python examples.',
  'description': 'JSVEE content package containing Python examples.',
  'author': 'Teemu Sirkiä',
  'license': 'MIT',
  'version': '0.2.0',
  'url': '',
  'teaserContent': ['ae_adl_hello', 'ae_adl_findmax'],
  'contents': {
    'ae_adl_hello': {
      'description': 'Simple Hello world example.',
      'order': 0,
      'title': 'ae_adl_hello',
      'concepts': ['Call', 'Str'],
      'keywords': ['print']
    },
    'ae_adl_variables': {
      'description': 'An example of different assignment statements.',
      'order': 1,
      'title': 'ae_adl_variables',
      'concepts': ['Add', 'Str', 'Assign', 'Call', 'Int'],
      'keywords': ['assignment']
    },
    'ae_adl_simple_arithmetics': {
      'description': 'An example of simple arithmetic expressions.',
      'order': 2,
      'title': 'ae_adl_simple_arithmetics',
      'concepts': ['Str', 'Assign', 'Int', 'Add', 'Call', 'Mult'],
      'keywords': ['arithmetic']
    },
    'ae_adl_arithmetics2': {
      'description': 'An example of more complex arithmetic expressions.',
      'order': 3,
      'title': 'ae_adl_arithmetics2',
      'concepts': ['Int', 'Float', 'Div', 'Sub', 'Call', 'Str', 'Assign', 'Add', 'Mult'],
      'keywords': ['arithmetic']
    },
    'ae_adl_swap': {
      'description': 'An example of swapping values of two variables.',
      'order': 4,
      'title': 'ae_adl_swap',
      'concepts': ['Int', 'Call', 'Str', 'Assign'],
      'keywords': ['assign', 'swap']
    },
    'ae_adl_comparison': {
      'description': 'An example of using comparison operators.',
      'order': 5,
      'title': 'ae_adl_comparison',
      'concepts': ['Gt', 'Assign', 'Call', 'Int', 'NotEq', 'Lt', 'Str', 'Eq'],
      'keywords': ['comparison', 'operator']
    },
    'ae_adl_logic': {
      'description': 'An example of using comparison operators.',
      'order': 6,
      'title': 'ae_adl_logic',
      'concepts': ['Gt', 'GtE', 'Int', 'Assign', 'Or', 'And', 'Sub', 'Lt'],
      'keywords': ['comparison', 'operator']
    },
    'ae_adl_greet': {
      'description': 'An example of getting input from the user.',
      'order': 7,
      'title': 'ae_adl_greet',
      'concepts': ['Str', 'Assign', 'Call'],
      'keywords': ['input']
      
    },
    'ae_adl_input1': {
      'description': 'An example of getting two values from the user and calculating the sum of them.',
      'order': 8,
      'title': 'ae_adl_input1',
      'concepts': ['Call', 'Add', 'Assign', 'Mult', 'Str'],
      'keywords': ['input']
    },
    'ae_adl_input2': {
      'description': 'An example of getting input from the user.',
      'order': 9,
      'title': 'ae_adl_input2',
      'concepts': ['Str', 'Mult', 'Call', 'Assign', 'Float'],
      'keywords': ['input']
    },
    'ae_adl_hiscore1': {
      'description': 'An example of a simple if expression.',
      'order': 10,
      'title': 'ae_adl_hiscore1',
      'concepts': ['Call', 'Int', 'Gt', 'Str', 'Assign', 'If'],
      'keywords': ['if']
    },
    'ae_adl_hiscore2': {
      'description': 'An example of a simple if expression.',
      'order': 11,
      'title': 'ae_adl_hiscore2',
      'concepts': ['Assign', 'Gt', 'Str', 'Call', 'Int', 'If'],
      'keywords': ['if']
    },
    'ae_adl_ifelse': {
      'description': 'An example of a simple if expression with else statement.',
      'order': 12,
      'title': 'ae_adl_ifelse',
      'concepts': ['Eq', 'If', 'Assign', 'Str', 'Call', 'Int', 'Mod'],
      'keywords': ['if', 'else']
    },
    'ae_adl_ifelifelse': {
      'description': 'An example of if-elif-else statement.',
      'order': 13,
      'title': 'ae_adl_ifelifelse',
      'concepts': ['Call', 'Gt', 'If', 'Assign', 'Int', 'Str'],
      'keywords': ['if', 'elif', 'else']
    },
    'ae_adl_nested_if': {
      'description': 'An example of nesting two if statements.',
      'order': 14,
      'title': 'ae_adl_nested_if',
      'concepts': ['Call', 'GtE', 'Lt', 'Assign', 'Str', 'If', 'Int'],
      'keywords': ['if', 'nesting']
    },
    'ae_adl_while': {
      'description': 'An example of using a simple while statement.',
      'order': 15,
      'title': 'ae_adl_while',
      'concepts': ['Mult', 'Str', 'Lt', 'Assign', 'Int', 'While', 'Call'],
      'keywords': ['while']
    },
    'ae_adl_for': {
      'description': 'An example of using a simple for statement.',
      'order': 16,
      'title': 'ae_adl_for',
      'concepts': ['For', 'Int', 'Str', 'Mult', 'Call'],
      'keywords': ['for']
    },
    'ae_adl_strings': {
      'description': 'An example of concatenating strings and using len function.',
      'order': 17,
      'title': 'ae_adl_strings',
      'concepts': ['Str', 'Assign', 'Call', 'Add'],
      'keywords': ['string', 'len', 'concatenation']
    },
    'ae_adl_lists1': {
      'description': 'An example of creating and indexing a list.',
      'order': 18,
      'title': 'ae_adl_lists1',
      'concepts': ['USub', 'Attribute', 'Int', 'Index', 'Str', 'Call', 'Assign', 'List'],
      'keywords': ['list', 'index']
    },
    'ae_adl_lists2': {
      'description': 'An example of iterating a list by using a for statement.',
      'order': 19,
      'title': 'ae_adl_lists2',
      'concepts': ['For', 'List', 'Int', 'Assign', 'Call', 'Str'],
      'keywords': ['list', 'iteration']
    },
    'ae_adl_lists3': {
      'description': 'An example of modifying a list by using a for statement.',
      'order': 20,
      'title': 'ae_adl_lists3',
      'concepts': ['Index', 'Int', 'List', 'For', 'Call', 'Mult', 'Assign'],
      'keywords': ['list', 'iteration']
    },
    'ae_adl_format1': {
      'description': 'An example of formatting strings.',
      'order': 21,
      'title': 'ae_adl_format1',
      'concepts': ['Attribute', 'Int', 'Str', 'Assign', 'Call'],
      'keywords': ['string', 'format']
    },
    'ae_adl_format2': {
      'description': 'An example of formatting strings.',
      'order': 22,
      'title': 'ae_adl_format2',
      'concepts': ['Attribute', 'Str', 'Float', 'Assign', 'Call'],
      'keywords': ['string', 'format']
    },
    'ae_adl_findmax': {
      'description': 'An example of finding the maximum value in a list.',
      'order': 23,
      'title': 'ae_adl_findmax',
      'concepts': ['Int', 'Index', 'Gt', 'Call', 'List', 'If', 'For', 'Str', 'Assign'],
      'keywords': ['list', 'iteration']
    },
    'ae_adl_functions1': {
      'description': 'An example of calling a function with a parameter.',
      'order': 24,
      'title': 'ae_adl_functions1',
      'concepts': ['FunctionDef', 'arg', 'Call', 'Str'],
      'keywords': ['function', 'parameter']
    },
    'ae_adl_returnvalue': {
      'description': 'An example of using the return value of a function.',
      'order': 25,
      'title': 'ae_adl_returnvalue',
      'concepts': ['Attribute', 'FunctionDef', 'Mult', 'Float', 'arg', 'Return', 'Call', 'Assign', 'Str'],
      'keywords': ['function', 'parameter', 'return value']
    },
    'ae_adl_functions2': {
      'description': 'An example of calling a function that returns a value.',
      'order': 26,
      'title': 'ae_adl_functions2',
      'concepts': ['Assign', 'Int', 'Div', 'Return', 'FunctionDef', 'Add', 'arg', 'Str', 'Call'],
      'keywords': ['function', 'parameter', 'return value']
    },
    'ae_adl_functions3': {
      'description': 'An example of nested function calls.',
      'order': 27,
      'title': 'ae_adl_functions3',
      'concepts': ['Int', 'FunctionDef', 'Add', 'arg', 'Float', 'Assign', 'Sub', 'Str', 'Call', 'Mult', 'Return'],
      'keywords': ['function', 'parameter', 'return value', 'nesting']
    },
    'ae_adl_recursion': {
      'description': 'An example of calculating factorial by using a recursive function.',
      'order': 28,
      'title': 'ae_adl_recursion',
      'concepts': ['Str', 'If', 'Return', 'Mult', 'FunctionDef', 'Int', 'Sub', 'arg', 'Lt', 'Call'],
      'keywords': ['function', 'recursion', 'parameter', 'return value']
    },
    'ae_adl_dict1': {
      'description': 'An example of using a dictionary as a phonebook.',
      'order': 29,
      'title': 'ae_adl_dict1',
      'concepts': ['arg', 'FunctionDef', 'Assign', 'Call', 'In', 'Str', 'If', 'Index', 'Dict'],
      'keywords': ['dictionary']
    },
    'ae_adl_dict2': {
      'description': 'An example of storing points in a dictionary.',
      'order': 30,
      'title': 'ae_adl_dict2',
      'concepts': ['Str', 'Add', 'Int', 'Call', 'FunctionDef', 'Assign', 'Index', 'Dict'],
      'keywords': ['dictionary']
    },
    'ae_adl_dict3': {
      'description': 'An example of searching the best-matching value in a dictionary.',
      'order': 31,
      'title': 'ae_adl_dict3',
      'concepts': ['Dict', 'Index', 'Int', 'Str', 'Gt', 'Assign', 'If', 'For', 'Call', 'Or', 'FunctionDef', 'None', 'Eq'],
      'keywords': ['dictionary', 'iteration']
    },
    'ae_adl_objects1': {
      'description': 'An example of creating objects and calling methods.',
      'order': 32,
      'title': 'ae_adl_objects1',
      'concepts': ['Attribute', 'Call', 'Assign', 'Int'],
      'keywords': ['instance', 'method']
    },
    'ae_adl_objects2': {
      'description': 'An example of how classes and methods work.',
      'order': 33,
      'title': 'ae_adl_objects2',
      'concepts': ['Add', 'Assign', 'ClassDef', 'Call', 'Attribute', 'Lt', 'False', 'Int', 'True', 'Gt', 'If', 'arg', 'Sub', 'Return', 'FunctionDef'],
      'keywords': ['class', 'instance', 'method']
    },
    'ae_adl_objects3': {
      'description': 'An example of constructing objects and storing them into a dictionary.',
      'order': 34,
      'title': 'ae_adl_objects3',
      'concepts': ['FunctionDef', 'Index', 'AugAssign', 'Add', 'arg', 'Call', 'Assign', 'Attribute', 'Int', 'Return', 'ClassDef', 'Sub', 'Dict'],
      'keywords': ['class', 'instance', 'dictionary']
    },
    'ae_python_intro': {
      'description': 'An example of simple arithmetic operations.',
      'order': 35,
      'title': 'ae_python_intro',
      'concepts': ['Mult', 'Int', 'Float', 'Add', 'Assign'],
      'keywords': ['arithmetic']
    },
    'ae_python_assignment': {
      'description': 'An example of different assignment statements.',
      'order': 36,
      'title': 'ae_python_assignment',
      'concepts': ['Add', 'Assign', 'Int'],
      'keywords': ['assignment']
    },
    'ae_python_input': {
      'description': 'An example of reading user input.',
      'order': 37,
      'title': 'ae_python_input',
      'concepts': ['Assign', 'Call', 'Str'],
      'keywords': ['input']
    },
    'ae_python_float': {
      'description': 'An example of using user input as part of arithmetic operations.',
      'order': 38,
      'title': 'ae_python_float',
      'concepts': ['Call', 'Mult', 'Str', 'Int', 'Float', 'Assign', 'Add'],
      'keywords': ['input', 'arithmetic']
    },
    'ae_python_if': {
      'description': 'An example of using user input with if statement.',
      'order': 39,
      'title': 'ae_python_if',
      'concepts': ['Int', 'If', 'Call', 'Str', 'Assign', 'Gt'],
      'keywords': ['input', 'if']
    },
    'ae_python_while': {
      'description': 'An example of counting positive integers by using while statement.',
      'order': 40,
      'title': 'ae_python_while',
      'concepts': ['NotEq', 'Str', 'Assign', 'Gt', 'Int', 'If', 'Add', 'While', 'Call'],
      'keywords': ['while']
    },
    'ae_python_for': {
      'description': 'An example of using for loop.',
      'order': 41,
      'title': 'ae_python_for',
      'concepts': ['Str', 'For', 'Int', 'Mult', 'Call'],
      'keywords': ['for']
    },
    'ae_python_function': {
      'description': 'An example of using a simple function with two parameters and a return value.',
      'order': 42,
      'title': 'ae_python_function',
      'concepts': ['Call', 'arg', 'Assign', 'Add', 'Return', 'Mult', 'Str', 'Int', 'FunctionDef'],
      'keywords': ['function', 'parameter', 'return value']
    },
    'ae_python_list': {
      'description': 'An example of creating and using lists with for statement.',
      'order': 43,
      'title': 'ae_python_list',
      'concepts': ['List', 'arg', 'Call', 'FunctionDef', 'Assign', 'Str', 'Attribute', 'If', 'Return', 'Index', 'Gt', 'Int', 'For'],
      'keywords': ['list', 'iteration']
    },
    'ae_python_split': {
      'description': 'An example of splitting a string and using the result as a list containing integers.',
      'order': 44,
      'title': 'ae_python_split',
      'concepts': ['Index', 'Attribute', 'Add', 'For', 'Gt', 'Call', 'FunctionDef', 'Assign', 'Str', 'If', 'Int'],
      'keywords': ['string', 'split']
    },
    'ae_python_dict': {
      'description': 'An example of using dictionaries to store data.',
      'order': 45,
      'title': 'ae_python_dict',
      'concepts': ['Dict', 'Call', 'arg', 'If', 'Str', 'Assign', 'Index', 'FunctionDef', 'In'],
      'keywords': ['dictionary']
    },
    'ae_python_file': {
      'description': 'An example of reading a file.',
      'order': 46,
      'title': 'ae_python_file',
      'concepts': ['For', 'Lt', 'Str', 'FunctionDef', 'Int', 'Assign', 'Call', 'Index', 'If', 'Attribute'],
      'keywords': ['file', 'iteration']
    },
    'ae_python_class1': {
      'description': 'An example of creating objects and calling methods.',
      'order': 47,
      'title': 'ae_python_class1',
      'concepts': ['Call', 'Assign', 'Int', 'Attribute'],
      'keywords': ['instance', 'method']
    },
    'ae_python_class2': {
      'description': 'An example of how methods work.',
      'order': 48,
      'title': 'ae_python_class2',
      'concepts': ['Lt', 'Assign', 'Call', 'Sub', 'arg', 'Attribute', 'ClassDef', 'True', 'If', 'FunctionDef', 'Int', 'Add', 'Gt', 'Return', 'False'],
      'keywords': ['class', 'instance', 'method']
    },
    'ae_adl_vals_refs1': {
      'description': 'An example of showing that simple parameter values are not passed as references.',
      'order': 49,
      'title': 'ae_adl_vals_refs1',
      'concepts': ['arg', 'Int', 'Assign', 'Call', 'Str', 'FunctionDef'],
      'keywords': ['reference']
    },
    'ae_adl_vals_refs2': {
      'description': 'An example of showing that lists are passed as references and changing the list is visible in all places.',
      'order': 50,
      'title': 'ae_adl_vals_refs2',
      'concepts': ['FunctionDef', 'Int', 'Index', 'Assign', 'Call', 'arg', 'List'],
      'keywords': ['reference']
    },
    'ae_adl_vals_refs3': {
      'description': 'An example of showing that assigning a list to a variable assigns a reference instead of a copy.',
      'order': 51,
      'title': 'ae_adl_vals_refs3',
      'concepts': ['Int', 'Assign', 'Index', 'Call', 'List', 'Str', 'FunctionDef'],
      'keywords': ['reference']
    },
    'ae_adl_tryexcept1': {
      'description': 'An example of handling exceptions with try statement.',
      'order': 52,
      'title': 'ae_adl_tryexcept1',
      'concepts': ['ExceptHandler', 'Call', 'Try', 'Str', 'Assign', 'Add'],
      'keywords': ['try', 'except']
    },
    'ae_adl_tryexcept2': {
      'description': 'An example of handling exceptions during a function call.',
      'order': 53,
      'title': 'ae_adl_tryexcept2',
      'concepts': ['Div', 'Add', 'Assign', 'arg', 'ExceptHandler', 'FunctionDef', 'Return', 'Int', 'Try', 'Call', 'Str'],
      'keywords': ['try', 'execpt']
    },
    'ae_adl_file1': {
      'description': 'An example of reading a file that contains integers.',
      'order': 54,
      'title': 'ae_adl_file1',
      'concepts': ['Call', 'Str', 'Div', 'Add', 'Attribute', 'For', 'Int', 'Assign', 'FunctionDef'],
      'keywords': ['file', 'iteration']
    },
    'ae_adl_file2': {
      'description': 'An example of reading a file that contains strings.',
      'order': 55,
      'title': 'ae_adl_file2',
      'concepts': ['For', 'Index', 'Assign', 'Attribute', 'Int', 'Eq', 'Str', 'FunctionDef', 'Call', 'If'],
      'keywords': ['file', 'iteration']
    }
  }
};

module.exports = JSVEEPython;
