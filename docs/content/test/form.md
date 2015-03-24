---
title: "Form"
description: ""
---

<div class="ContainerFull">

<h1>Forms</h1>

<p>
<label class="t-width1of6 t-inlineBlock">Small</label>
<input class="Input--sm t-width1of6" type="text" placeholder="nomal">
<select class="Select--sm t-width1of6">
<option>select</option>
<option>2</option>
</select>
<button class="ButtonBorder Button--sm">button</button>
<a class="ButtonBorder Button--sm">a.Button</a>
<input class="" type="checkbox" placeholder="nomal">
<input class="" type="radio" placeholder="nomal">
</p>

<p>
<label class="t-width1of6 t-inlineBlock">Base</label>
<input class="t-width1of6" type="text" placeholder="nomal">
<select class="t-width1of6">
<option>select</option>
<option>2</option>
</select>
<button class="ButtonBorder">button</button>
<a class="ButtonBorder">a.Button</a>
<input class="" type="checkbox" placeholder="nomal">
<input class="" type="radio" placeholder="nomal">
</p>




<p>
<label class="t-width1of6 t-inlineBlock">Large</label>
<input class="Input--lg t-width1of6" type="text" placeholder="nomal">
<select class="Select--lg t-width1of6">
<option>select</option>
<option>2</option>
</select>
<button class="ButtonBorder Button--lg">button</button>
<a class="ButtonBorder Button--lg">a.Button</a>
<input class="" type="checkbox" placeholder="nomal">
<input class="" type="radio" placeholder="nomal">
</p>


<p>
<label class="t-width1of6 t-inlineBlock">X-Large</label>
<input class="Input--xl t-width1of6" type="text" placeholder="nomal">
<select class="Select--xl t-width1of6">
<option>select</option>
<option>2</option>
</select>
<button class="ButtonBorder Button--xl">button</button>
<a class="ButtonBorder Button--xl">a.Button</a>
<input class="" type="checkbox" placeholder="nomal">
<input class="" type="radio" placeholder="nomal">
</p>



<h2>Input & Select </h2>
<p>
  <input class="Input t-width2of6" type="text" placeholder="nomal">
  <select class="Select t-width2of6">
    <option>select</option>
    <option>2</option>
  </select>
</p>

<h3>Focus</h3>
<p>
  <input class="Input t-width2of6 is-focus" type="text" placeholder="nomal">
  <select class="is-focus Select t-width2of6">
    <option>select</option>
    <option>2</option>
  </select>
</p>

<h3>Focus</h3>
<p>
  <input class="Input t-width2of6 is-disabled" type="text" placeholder="nomal">
  <select class="is-disabled Select t-width2of6">
    <option>select</option>
    <option>2</option>
  </select>
</p>



<h2>Full width</h2>
<p>
<input class="Input--full" type="text" placeholder=".Input--full">
</p>



<h2>Size</h2>
<p>
<input class="Input Input--sm" type="text" value=".Input--sm">
</p>
<p>
<input class="" type="text" placeholder="Base">
</p>
<p>
<input class="Input--lg" type="text" value=".Input--lg">
</p>
<p>
<input class="Input--xl" type="text" placeholder=".Input--xl">
</p>

<h2>State color</h2>
<p>
<input class="Input is-success" type="text" value=".Input.is-success">
</p>
<p>
<input class="Input is-notice" type="text" value=".Input.is-notice">
</p>
<p>
<input class="Input is-warning" type="text" value=".Input.is-warning">
</p>
<p>
<input class="Input is-error" type="text" value=".Input.is-error">
</p>












<form>
  <fieldset>
    <legend>Inputs as descendents of labels (form legend). This doubles up as a long legend that can test word wrapping.</legend>
    <p><label>Text input <input type="text" value="default value that goes on and on without stopping or punctuation"></label></p>
    <p><label>Email input <input type="email"></label></p>
    <p><label>Search input <input type="search"></label></p>
    <p><label>Tel input <input type="tel"></label></p>
    <p><label>URL input <input type="url" placeholder="http://"></label></p>
    <p><label>Password input <input type="password" value="password"></label></p>
    <p><label>File input <input type="file"></label></p>

    <p><label>Radio input <input type="radio" name="rad"></label></p>
    <p><label>Checkbox input <input type="checkbox"></label></p>
    <p><label><input type="radio" name="rad"> Radio input</label></p>
    <p><label><input type="checkbox"> Checkbox input</label></p>

    <p><label>Select field <select><option>Option 01</option><option>Option 02</option></select></label></p>
    <p><label>Textarea <textarea cols="30" rows="5" >Textarea text</textarea></label></p>
  </fieldset>

  <fieldset>
    <legend>Inputs as siblings of labels</legend>
    <p><label for="ic">Color input</label> <input type="color" id="ic" value="#000000"></p>
    <p><label for="in">Number input</label> <input type="number" id="in" min="0" max="10" value="5"></p>
    <p><label for="ir">Range input</label> <input type="range" id="ir" value="10"></p>
    <p><label for="idd">Date input</label> <input type="date" id="idd" value="1970-01-01"></p>
    <p><label for="idm">Month input</label> <input type="month" id="idm" value="1970-01"></p>
    <p><label for="idw">Week input</label> <input type="week" id="idw" value="1970-W01"></p>
    <p><label for="idt">Datetime input</label> <input type="datetime" id="idt" value="1970-01-01T00:00:00Z"></p>
    <p><label for="idtl">Datetime-local input</label> <input type="datetime-local" id="idtl" value="1970-01-01T00:00"></p>

    <p><label for="irb">Radio input</label> <input type="radio" id="irb" name="rad"></p>
    <p><label for="icb">Checkbox input</label> <input type="checkbox" id="icb"></p>
    <p><input type="radio" id="irb2" name="rad"> <label for="irb2">Radio input</label></p>
    <p><input type="checkbox" id="icb2"> <label for="icb2">Checkbox input</label></p>

    <p><label for="s">Select field</label> <select id="s"><option>Option 01</option><option>Option 02</option></select></p>
    <p><label for="t">Textarea</label> <textarea id="t" cols="30" rows="5" >Textarea text</textarea></p>
  </fieldset>

  <fieldset>
    <legend>Clickable inputs and buttons</legend>
    <p><input type="image" src="http://lorempixel.com/90/24" alt="Image (input)"></p>
    <p><input type="reset" value="Reset (input)"></p>
    <p><input type="button" value="Button (input)"></p>
    <p><input type="submit" value="Submit (input)"></p>
    <p><input type="submit" value="Disabled (input)" disabled></p>

    <p><button type="reset">Reset (button)</button></p>
    <p><button type="button">Button (button)</button></p>
    <p><button type="submit">Submit (button)</button></p>
    <p><button type="submit" disabled>Disabled (button)</button></p>
  </fieldset>

  <fieldset id="boxsize">
    <legend>box-sizing tests</legend>
    <div><input type="text" value="text"></div>
    <div><input type="email" value="email"></div>
    <div><input type="search" value="search"></div>
    <div><input type="url" value="http://example.com"></div>
    <div><input type="password" value="password"></div>

    <div><input type="color" value="#000000"></div>
    <div><input type="number" value="5"></div>
    <div><input type="range" value="10"></div>
    <div><input type="date" value="1970-01-01"></div>
    <div><input type="month" value="1970-01"></div>
    <div><input type="week" value="1970-W01"></div>
    <div><input type="datetime" value="1970-01-01T00:00:00Z"></div>
    <div><input type="datetime-local" value="1970-01-01T00:00"></div>

    <div><input type="radio"></div>
    <div><input type="checkbox"></div>

    <div><select><option>Option 01</option><option>Option 02</option></select></div>
    <div><textarea cols="30" rows="5">Textarea text</textarea></div>

    <div><input type="image" src="http://lorempixel.com/90/24" alt="Image (input)"></div>
    <div><input type="reset" value="Reset (input)"></div>
    <div><input type="button" value="Button (input)"></div>
    <div><input type="submit" value="Submit (input)"></div>

    <div><button type="reset">Reset (button)</button></div>
    <div><button type="button">Button (button)</button></div>
    <div><button type="submit">Submit (button)</button></div>
  </fieldset>
</form>



</div>
