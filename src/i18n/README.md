Contributing
------

Each file not beginning with `whitelist` in the `translations` directory contains a file with translations for each phrase in the site.

These are named by [language code](https://www.science.co.il/language/Locale-codes.php). For example, Spanish translations are
in [translations/es.json](translations/es.json).


All phrases by default are in English. If you want to correct / add a phrase:
1. Go to the file you want to edit
1. Click the pencil in the top-right that says `Edit this page`
1. Only change things on the right side of the colon
1. When done, hit "Create a new branch for this commit and start a pull request." and submit 
1. It will be reviewed and submitted

If you want to add a new language:
1. Go to [locales.js](locales.js)
1. Edit as above
1. Add a pairing to `SUPPORTED_LANGS`
1. Add the new code to `default export`
1. When a new version is released, an all-English version will be used and can then be fixed

Thanks!!