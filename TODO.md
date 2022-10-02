# VISUALS
  - folders
  - notes
  - model after apple notes
  - word, character, and line count optional
  - print file
  - control output options in settings
  - modern look
  - word doc
  - link to another note?
  - ?tab=noteviewer#note_id
  - alert.js
  - launch n new wndow in settings
  - collapse folders and notes
  - fullscreen notes
  - date created
  
IMPLEMENT LIKELY
  - contentediable instead of textarea?
    - allows for html and pictures etc... 

UNDER REVIEW
  - groups?
  - custom right click menu?
    - for deleting notes
  - show time?
  - unsupported browser support mode
    - copy html after js render

# FUNCTIONALITY
  - unique ids for folders and note names allowing for duplicate names
  - notes sotred in arrays or {} in localstorage
    - `{ 
      foldername: {
          number_of_notes: #, 
          id: a94rf, 
          notes: {
            notename: {
              id: lej9e4, 
              content: ""
            }
          }
      }
    }`
    - no underscores in note name
  - more customizablity
  - always autosave
  - use keyboard shortcuts for stuff
    - cmd t for new note?
  - render the note view differently according to settings
  - in function to display the note, use identifier
    - `func("grid/list")` or `func("view: grid/list")` 
    - USE a custom attribute `view="grid/list"`
  - detect keydown contenteditable
  - for the update feature, use json to link files to a specific update
  
  UNDER REVIEW
  - remove unnessary elements with javascript