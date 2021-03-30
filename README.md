# shopify

## Available Commands:
- configure   Create a configuration file
- deploy      deploy files to shopify
-  download    Download one or all of the theme files
-  get         Get a theme and config from shopify
-  help        Help about any command
-  new         New will create theme using Shopify Timber
-  open        Open the preview for your store.
-  publish     publish a theme
-  remove      Remove theme file(s) from shopify
-  update      Update Theme kit to the newest version.
-  version     Print the version number of Theme Kit
-  watch       Watch directory for changes and update remote theme

## Flags:
 - -c, --config string              path to config.yml
 - -d, --dir string                 directory that command will take effect. (default current directory)
 - -e, --env stringArray            environment to run the command (default [development])
 - -h, --help                       help for theme
 -     --ignored-file stringArray   A single file to ignore, use the flag multiple times to add multiple.
 -     --ignores stringArray        A path to a file that contains ignore patterns.
 -     --no-ignore                  Will disable config ignores so that all files can be changed
 -     --no-update-notifier         Stop theme kit from notifying about updates.
 - -p, --password string            theme password. This will override what is in your config.yml
 -     --proxy string               proxy for all theme requests. This will override what is in your config.yml
 - -s, --store string               your shopify domain. This will override what is in your config.yml
 - -t, --themeid string             theme id. This will override what is in your config.yml
 -     --timeout duration           the timeout to kill any stalled processes. This will override what is in your config.yml
 -     --vars string                path to an file that defines environment variables
 - -v, --verbose                    Enable more verbose output from the running command.-

**Use "theme [command] --help" for more information about a command.**
