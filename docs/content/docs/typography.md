---
title: "Typography"
description: "Work in Progress..."
categories:
  - "docs"
  - "modules"
---

<hr class="docs-hr">

<h2 class="H3">Heddings</h2>

<div class=>

  <div class="">



    <div class="docs-example">

    <table class="table">
      <tbody>
        <tr>
          <td><p class="H0">Sircus.css heading0</p></td>
          <td class="t-alignRight">[ &lt;p class=".H0"&gt; ]</td>
        </tr>
        <tr>
          <td><h1>Sircus.css heading1</h1></td>
          <td class="t-alignRight">[ &lt;h1&gt; | &lt;p class=".H1"&gt; ]</td>
        </tr>
        <tr>
          <td><h2 id="h2.-bootstrap-heading">h2. Sircus.css heading<a class="anchorjs-link" href="#h2.-bootstrap-heading"><span class="anchorjs-icon"></span></a></h2></td>
          <td class="type-info">Semibold 30px</td>
        </tr>
        <tr>
          <td><h3 id="h3.-bootstrap-heading">h3. Sircus.css heading<a class="anchorjs-link" href="#h3.-bootstrap-heading"><span class="anchorjs-icon"></span></a></h3></td>
          <td class="type-info">Semibold 24px</td>
        </tr>
        <tr>
          <td><h4 id="h4.-bootstrap-heading">h4. Sircus.css heading<a class="anchorjs-link" href="#h4.-bootstrap-heading"><span class="anchorjs-icon"></span></a></h4></td>
          <td class="type-info">Semibold 18px</td>
        </tr>
        <tr>
          <td><h5 id="h5.-bootstrap-heading">h5. Sircus.css heading<a class="anchorjs-link" href="#h5.-bootstrap-heading"><span class="anchorjs-icon"></span></a></h5></td>
          <td class="type-info">Semibold 14px</td>
        </tr>
        <tr>
          <td><h6>h6. Sircus.css heading</h6></td>
          <td class="type-info">Semibold 12px</td>
        </tr>
      </tbody>
    </table>
  </div>








    <h1 class="H0">Hedding0</h1>
    <h1>Hedding1</h1>
    <h2>Hedding2</h2>
    <h3>Hedding3</h3>
    <h4>Hedding4</h4>
    <h5>Hedding5</h5>
    <h6>Hedding6</h6>
  </div>
  <div class="Row-col t-wsm-width1of2">
{{< highlight html >}}
<!-- Hedding0 -->
<p class="H0">Hedding0</h1>

<!-- Hedding1 -->
<h1>Hedding1</h1>
<p class="H1">Hedding1</p>

<!-- Hedding2 -->
<h2>Hedding2</h2>
<p class="H2">Hedding2</p>

<!-- Hedding3 -->
<h3>Hedding3</h3>
<p class="H3">Hedding3</p>

<!-- Hedding4 -->
<h4>Hedding4</h4>
<p class="H4">Hedding4</p>

<!-- Hedding5 -->
<h5>Hedding5</h5>
<p class="H5">Hedding5</p>

<!-- Hedding6 -->
<h6>Hedding6</h6>
<p class="H6">Hedding6</p>
{{< /highlight >}}
  </div>

</div>

<hr class="docs-hr">


<h2 class="H3">Paragraph</h2>
<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m.
</p>
<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
</p>

{{< highlight html >}}
<p>...</p>
{{< /highlight >}}


<hr class="docs-hr">


<h2 class="H3">Unordered list</h2>


<div class="Row">

  <div class="Row-col t-wsm-width1of2">
    <ul>
      <li>list item 1</li>
      <li>list item 1
        <ul>
          <li>list item 2</li>
          <li>list item 2
            <ul>
              <li>list item 3</li>
              <li>list item 3</li>
            </ul>
          </li>
          <li>list item 2</li>
        </ul>
      </li>
      <li>list item 1</li>
    </ul>
  </div>
  <div class="Row-col t-wsm-width1of2">
{{< highlight html >}}
<ul>
  <li>list item 1</li>
</ul>
{{< /highlight >}}
</div>
