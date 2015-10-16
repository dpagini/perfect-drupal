/* influenced by: https://github.com/vigetlabs/gulp-starter */

/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulpfile.js/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/
var requiredir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requiredir('./tasks', { recurse: true });
