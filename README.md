# perfect-drupal
An attempt at a perfect Drupal project, with Vagrant, drush make file, DrupalVM, Gulp, NPM, Bower, Sass, etc.

the goal of this project is to simply source control a vagrantfile (or config), a make file, and custom source code



Files Explanation
* Vagrantfile -
* project.make.yml - Drush Makefile - configure a Drupal installation
* package.json - config file for npm (can this be somewhere else? can it be yml?)


What I want...
1. drush makefile installs drupal to "docroot" which the vagrant image uses as the docroot
2. all custom drupal development goes into "drupal" folder

Solve
* how to have the /drupal directory contain the source code to edit on the local machine, but appear in docroot/sites/all/ within the VM
