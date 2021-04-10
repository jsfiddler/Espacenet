# espacenet-public

## General remarks
This repository contains functions for [Espacenet](https://worldwide.espacenet.com) which might be useful to others as well.

## Functions
### Notes for Espacenet
The first function is a __post-it functionality__, that allows you to store your notes inside an object called ["localStorage"](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage).

### How does it work?
1. Download both the .html and the .js-File.
2. Create a bookmarklet with the content from the .js-file.
3. Browse to Espacenet and when the page has loaded, click the bookmarklet.
..1 A window will appear, that ask you to open a file. Open the .html-file you downloaded.
..2 Either set the window as "Always-om-top", or move it to the side, so it will stay open.
4. When you click on anythink in the result container (right hand side), the text inside your post-it will be updated by your localStorage.
5. You can use the WYSIWYG-editor above to edit the content, insert img via copy/paste and either save this note or export it to a file.
6. In case you need to delete your cache, the content of the localStorage will be deleted as well. Therefore you can export & import your localStorage BEFORE you delete your browsers cache.



Feel free to edit them, use them and tell me if you wish to implement more stuff or if you find bugs (use ISSUE).

best regards,
Manuel
