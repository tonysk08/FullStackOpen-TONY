# Exercises 0.4: New note diagram

```mermaid
sequenceDiagram
    Title: 0.4: new note

    participant BROWSER
    participant SERVER

    Note right of BROWSER: Client Add new note: "TEST"

    BROWSER->>SERVER: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate SERVER

    Note over SERVER: The server save the new note.
   
    SERVER-->>BROWSER: Responds 302 to the browser for redirect to the address /notes.
    deactivate SERVER

    BROWSER->>SERVER: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate SERVER

     SERVER-->>BROWSER: HTML document
    deactivate SERVER

    BROWSER->>SERVER: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate SERVER

    SERVER-->>BROWSER: CSS File [manin.css]
    deactivate SERVER

    BROWSER->>SERVER: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate SERVER

    SERVER-->>BROWSER: The JavaScript [manin.js]
    deactivate SERVER

     Note right of BROWSER: The browser starts executing the JavaScript code 

    BROWSER->>SERVER: GET GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate SERVER

    SERVER-->>BROWSER: [{ "content": "TEST", "date": "2024-03-29" }, ... ]
    deactivate SERVER

    Note right of BROWSER: The browser executes the callback function that renders the notes
```