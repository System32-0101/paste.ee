# pasteeAPI
A simple library to comunicate with Paste.ee API **this library requires an paste.ee API key**

## Install
```
npm install paste.ee-api
```

## Usage
### Create A Paste
```javascript
  let Pastee = new PasteeAPI('YOUR TOKEN');

  Pastee.paste({"contents" : "What ever you want", "name": "A new Paste", "expire": 100}).then(res => {
    
  }).catch(err => {

  });
```
#### Paste object
* contents - The content of the Paste (Required)
* name - The name of the paste (Not Required)
* expire - The time in seconds (Not Required)
* [NEW] sections - Array list of sections (Not Required)
#### Paste with sections
```javascript
  let Pastee = new PasteeAPI('YOUR TOKEN');

  Pastee.paste({"sections": [{"name":"Section1","syntax":"autodetect","contents":"This is section 1 content!"}],"description": "Sample Description", "name": "A new Paste", "expire": 100}).then(res => {
    
  }).catch(err => {

  });
```
#### Return Object
* id - the id of the paste
* link - link to the paste
* success - true or false

## V2 of pastee-api Made with <3 by Systemm32
