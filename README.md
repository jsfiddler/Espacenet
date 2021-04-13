# Functions for Espacenet:

## General remarks
This repository contains functions for [Espacenet](https://worldwide.espacenet.com) which might be useful to others as well.

## functions
### notes
The first function - [notes](https://github.com/jsfiddler/Espacenet/tree/main/notes) - is a __post-it functionality__, that allows you to store your notes inside an object called ["localStorage"](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage).

#### How does it work?

1. Download both the .html and the .js-file.
2. Create a bookmarklet with the content from the .js-file.
3. Browse  worldwide.espacenet.com and when the page has loaded, click the bookmarklet.
    1. A window will appear, that ask you to open a file.
    2. Open the .html-file you downloaded before.
4. For the window to stay open -either set the window as "Always-on-top" or move it outside your current browsers window.
5. When you click at anything inside the result container (right hand side of the GUI), the text inside your post-it will be updated by the content of your localStorage.
6. You can use the WYSIWYG-editor at the top of the post-it window to edit the content, insert images via copy/paste and either save this note or export/download it to a file.
7. In case you need to delete your cache, the content of the localStorage will be deleted as well. Therefore it's recommended that you export/download your localStorage BEFORE you delete your browsers cache. This way, you can import the file later and continue with your previous notes. Even more than that, exporting and importing your notes allows for sharing your private notes with other users as well.

### cross-domain requests via fetch-API
Using the fetch-API or JSONP, it's possible to get data from Espacenet automatically. Inside the folder [fetch](https://github.com/jsfiddler/Espacenet/tree/main/fetch) you'll find different examples on how to fetch data from Espacenet. Those examples can also be used for other sides as well, if configured correctly...

#### How does it work?

1. Using either fetch or JSONP for getting data from Espacenet without credentials by directly accessing the OPS with a valid access token generated from browsing espacenet before.

### historyLogger
Espacenet saves your history in an indexedDB called "espacenet". This bookmarklet opens a connection to this indexedDB and uses the data stored inside to create a file that contains your search history as .txt file. However, if you prefer .csv, XML-markup or anything else - feel free to implement it and share your code in the discussion-section.

#### How does it work?

1. ..
2. ..
3. ..

### jump to highlights inside fulltext
See the [Espacenet Highlighter](https://github.com/jsfiddler/Espacenet/tree/main/highlighter) for details.

#### How does it work?

1. Uses css-styles attached to your the words matching your search-query to automatically scroll them into view.
2. Saves a list of all the matches inside sessionStorage, such that the bookmarklert can be pressed multiple times.
3. Attached a counter to the patent number after the second click, in order for you to see how many highlights have been found inside this section of the fulltext.

### espaceBM (ver. 3.0) 
After two successful implementations, its time for version 3.0. "espaceBM" is a combined bookmarklet, which enriches the search on worldwide.espacenet.com with many additional features such as: forward search, get valid espacenet-Links for more than 10 pns, E.I.S (EspacenetImageSearch) & autoScroller.

#### How does it work?

1. ..
2. ..
3. ..
4.... 

Feel free to edit them, use them and tell me if you wish to implement more stuff or if you find bugs (use ISSUE).

best regards,
Manuel
