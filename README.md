# **AniLines**
A react library that gives the user to get a simple interactive matrix of lines which can be cumtomized as per your needs. The lines will move according to the mouse position and will otherwise have an idle animation when the mouse is not hovering over them. 

## **Getting started**

Installation is as simple as any other npm package. Run the below command is all you need to run to install the package in your project.

```Bash
npm i anilines
```

Once installed, you're ready to go.

## **Cutomizations**

Presently, Anilines supports a suite of basic customizations, with a load more in the pipeline (hopefully i have the time 🥲). 

| Property    | Default value | Required |  Description |
| ------------| ------------- |----------|--------------|
| columnCount | none          | YES      | Number of columns in the matrix|
| rowCount    | none          | YES      | Number of rows in the matrix|
| enableIdleAnimation| none   | NO       | An idle animation will be playing if the mouse is not hovering on the object|
| style       | default style will be applied via css if not provided          | NO       | Accepts CSS properties to customise the the **line elements only**|

### **Examples**

```JavaScript
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { AniLines } from "anilines";

function App() {
  return (
    <div className="App">
    <AniLines columnCount="10" rowCount="10" enableIdleAnimation={true} style={{ background: 'linear-gradient(45deg, #1488CC, #FFFFFF)' }}/>
    </div>
  );
}

export default App;
```
And the above example looks like this -
<center>![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFiZDI3OGNmNDIwMjU2OGRkNjJhNTFkZDhiNmI0Y2Q1NDU4MmZiOCZjdD1n/NL9zTKzpSWhq11Eblw/giphy.gif)</center>

## Suggestion and improvements

If you have inputs to improve this package, go ahead drop me an email. 🙂