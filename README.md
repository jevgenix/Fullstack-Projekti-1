# Fullstack-Projekti-1

## 1. Create a web server with Node.js and Express. Add four routes to your application:

### “/”,

### “/guestbook”,

### “/newmessage” and

### “/ajaxmessage”.

## 2. "/" –route will render the front page of your site. You can use any available HTML template or just develop one by yourself. The page should have navigation links which lead to the other application routes. (Template repository: Search google)

## 3. "/guestbook" –route will load a JSON-file and parse it on the page as a formatted table (use either Bootstrap or Pure.css to style the table). Sample JSON file is available here; http://pastebin.com/VpbJqSic (Linkittyy ulkoiselle sivustolle.).

## 4. "/newmessage" –route render an input form to the page. Form should have fields for the following data:

### username,

### country and

### message and

### a button which enables user to send it. Don’t allow empty fields to be submitted

# When user submit the form, collected data will be saved as JSON element into the data file.

## 4."/ajaxmessage" will render similar form to the user. The only difference is, that the Submit-button does not post the form, but it runs a Javascript-code which will collect the data from the text fields and send them to the back-end as AJAX-call. It will then return all the messages as a response to the page, under the form. You can use native Javascript or jQuery to implement the code.

# Publish the application in your GitHub repository, deploy to Heroku and return both links.
