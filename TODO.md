# VISUALS
  - Folders -> Notes -> Note Editor.
  - Modern look.
    - Model after Apple Notes.
  - Settings.
    - Make word, character, and line count optional.
    - Ability to control the output options (print, save locally, save as file, copy) that are displayed in Note Editor.
     - Save as Word doc.
    - Option to launch in new window.
  - Toolbar.
    - Ability to collapse folders and notes in toolbar.
    - Ability to full screen notes which would collapse folders and notes.
    - The collapse buttons for folders and notes has separators aligned with folder and notes areas in the page.
    - Separators move as the width does too.
    - Width of notes and folders is not changeable.
    - Toggle date created option.
  - URL
  - /app/notes?note=note_id
  - /app/notes#note_id
  - Use Alert.js.
  
IMPLEMENT LIKELY
  - Contentediable instead of textarea, allowing for html and pictures etc... 
  - Link block that links to another note.

UNDER REVIEW
  - Note groups.
  - Custom right click menu for deleting notes for deleting notes.
  - Show current time in tool bar.
  - Unsupported browser support mode.
    - Copy html after JS render.
    - /app/unsupported
- Import Word doc.

REJECTED
- ?tab=noteviewer#note_id

# FUNCTIONALITY
  - Append scripts based on update.
  - Use unique ids for folders and note names allowing for duplicate names.
  - Notes sorted in arrays or {} within LocalStorage.
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
    - No underscores in note name.
  - Generally, more customizability.
  - Always autosave.
  - Render the note views differently according to settings (grid/list).
  - In function to display the note, use identifier
    - `func("grid/list")` or `func("view: grid/list")` 
    - USE a custom attribute `view="grid/list"`
  - Detect keydown in a contenteditable.
  - For the update feature, use json to link files to a specific update.
  
UNDER REVIEW
  - Remove unnecessary elements with JavaScript.
  - Use keyboard shortcuts.
    - CTRL+T/CMMD+T for new note.


