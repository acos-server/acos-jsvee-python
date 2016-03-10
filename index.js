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
  'description': '',
  'author': 'Teemu Sirkiä',
  'license': 'MIT',
  'version': '0.0.1',
  'url': '',
  'teaserContent': ['ae_adl_hello', 'ae_adl_findmax'],
  'contents': {
    'ae_adl_hello': {
      'description': '',
      'order': 0,
      'title': 'ae_adl_hello'
    },
    'ae_adl_variables': {
      'description': '',
      'order': 1,
      'title': 'ae_adl_variables'
    },
    'ae_adl_simple_arithmetics': {
      'description': '',
      'order': 2,
      'title': 'ae_adl_simple_arithmetics'
    },
    'ae_adl_arithmetics2': {
      'description': '',
      'order': 3,
      'title': 'ae_adl_arithmetics2'
    },
    'ae_adl_swap': {
      'description': '',
      'order': 4,
      'title': 'ae_adl_swap'
    },
    'ae_adl_comparison': {
      'description': '',
      'order': 5,
      'title': 'ae_adl_comparison'
    },
    'ae_adl_logic': {
      'description': '',
      'order': 6,
      'title': 'ae_adl_logic'
    },
    'ae_adl_greet': {
      'description': '',
      'order': 7,
      'title': 'ae_adl_greet'
    },
    'ae_adl_input1': {
      'description': '',
      'order': 8,
      'title': 'ae_adl_input1'
    },
    'ae_adl_input2': {
      'description': '',
      'order': 9,
      'title': 'ae_adl_input2'
    },
    'ae_adl_hiscore1': {
      'description': '',
      'order': 10,
      'title': 'ae_adl_hiscore1'
    },
    'ae_adl_hiscore2': {
      'description': '',
      'order': 11,
      'title': 'ae_adl_hiscore2'
    },
    'ae_adl_ifelse': {
      'description': '',
      'order': 12,
      'title': 'ae_adl_ifelse'
    },
    'ae_adl_ifelifelse': {
      'description': '',
      'order': 13,
      'title': 'ae_adl_ifelifelse'
    },
    'ae_adl_nested_if': {
      'description': '',
      'order': 14,
      'title': 'ae_adl_nested_if'
    },
    'ae_adl_while': {
      'description': '',
      'order': 15,
      'title': 'ae_adl_while'
    },
    'ae_adl_for': {
      'description': '',
      'order': 16,
      'title': 'ae_adl_for'
    },
    'ae_adl_strings': {
      'description': '',
      'order': 17,
      'title': 'ae_adl_strings'
    },
    'ae_adl_lists1': {
      'description': '',
      'order': 18,
      'title': 'ae_adl_lists1'
    },
    'ae_adl_lists2': {
      'description': '',
      'order': 19,
      'title': 'ae_adl_lists2'
    },
    'ae_adl_lists3': {
      'description': '',
      'order': 20,
      'title': 'ae_adl_lists3'
    },
    'ae_adl_format1': {
      'description': '',
      'order': 21,
      'title': 'ae_adl_format1'
    },
    'ae_adl_format2': {
      'description': '',
      'order': 22,
      'title': 'ae_adl_format2'
    },
    'ae_adl_findmax': {
      'description': '',
      'order': 23,
      'title': 'ae_adl_findmax'
    },
    'ae_adl_functions1': {
      'description': '',
      'order': 24,
      'title': 'ae_adl_functions1'
    },
    'ae_adl_returnvalue': {
      'description': '',
      'order': 25,
      'title': 'ae_adl_returnvalue'
    },
    'ae_adl_functions2': {
      'description': '',
      'order': 26,
      'title': 'ae_adl_functions2'
    },
    'ae_adl_functions3': {
      'description': '',
      'order': 27,
      'title': 'ae_adl_functions3'
    },
    'ae_adl_recursion': {
      'description': '',
      'order': 28,
      'title': 'ae_adl_recursion'
    },
    'ae_adl_dict1': {
      'description': '',
      'order': 29,
      'title': 'ae_adl_dict1'
    },
    'ae_adl_dict2': {
      'description': '',
      'order': 30,
      'title': 'ae_adl_dict2'
    },
    'ae_adl_dict3': {
      'description': '',
      'order': 31,
      'title': 'ae_adl_dict3'
    },
    'ae_adl_objects1': {
      'description': '',
      'order': 32,
      'title': 'ae_adl_objects1'
    },
    'ae_adl_objects2': {
      'description': '',
      'order': 33,
      'title': 'ae_adl_objects2'
    },
    'ae_adl_objects3': {
      'description': '',
      'order': 34,
      'title': 'ae_adl_objects3'
    },
    'ae_python_intro': {
      'description': '',
      'order': 35,
      'title': 'ae_python_intro'
    },
    'ae_python_assignment': {
      'description': '',
      'order': 36,
      'title': 'ae_python_assignment'
    },
    'ae_python_input': {
      'description': '',
      'order': 37,
      'title': 'ae_python_input'
    },
    'ae_python_float': {
      'description': '',
      'order': 38,
      'title': 'ae_python_float'
    },
    'ae_python_if': {
      'description': '',
      'order': 39,
      'title': 'ae_python_if'
    },
    'ae_python_while': {
      'description': '',
      'order': 40,
      'title': 'ae_python_while'
    },
    'ae_python_for': {
      'description': '',
      'order': 41,
      'title': 'ae_python_for'
    },
    'ae_python_function': {
      'description': '',
      'order': 42,
      'title': 'ae_python_function'
    },
    'ae_python_list': {
      'description': '',
      'order': 43,
      'title': 'ae_python_list'
    },
    'ae_python_split': {
      'description': '',
      'order': 44,
      'title': 'ae_python_split'
    },
    'ae_python_dict': {
      'description': '',
      'order': 45,
      'title': 'ae_python_dict'
    },
    'ae_python_file': {
      'description': '',
      'order': 46,
      'title': 'ae_python_file'
    },
    'ae_python_class1': {
      'description': '',
      'order': 47,
      'title': 'ae_python_class1'
    },
    'ae_python_class2': {
      'description': '',
      'order': 48,
      'title': 'ae_python_class2'
    },
    'ae_adl_vals_refs1': {
      'description': '',
      'order': 49,
      'title': 'ae_adl_vals_refs1'
    },
    'ae_adl_vals_refs2': {
      'description': '',
      'order': 50,
      'title': 'ae_adl_vals_refs2'
    },
    'ae_adl_vals_refs3': {
      'description': '',
      'order': 51,
      'title': 'ae_adl_vals_refs3'
    },
    'ae_adl_tryexcept1': {
      'description': '',
      'order': 52,
      'title': 'ae_adl_tryexcept1'
    },
    'ae_adl_tryexcept2': {
      'description': '',
      'order': 53,
      'title': 'ae_adl_tryexcept2'
    },
    'ae_adl_file1': {
      'description': '',
      'order': 54,
      'title': 'ae_adl_file1'
    },
    'ae_adl_file2': {
      'description': '',
      'order': 55,
      'title': 'ae_adl_file2'
    }
  }
};

module.exports = JSVEEPython;
