# Exercises 0.6: New Note in SPA - Diagram 

```mermaid
sequenceDiagram
    Title: Add a New Note in SPA diagram 

    participant BROWSER
    participant SERVER

    Note right of BROWSER: Client Add new note: "TEST"

    BROWSER->>SERVER: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate SERVER

    Note over SERVER: The server save the new note.

    SERVER-->>BROWSER: Responds Message: Note Created
    deactivate SERVER

    Note over BROWSER: The spa.js send the new note and then add the new <ul> to the page.
    Note over BROWSER: The BROWSER renders the new item without reload the whole page or call again html,JS or CSS..
```