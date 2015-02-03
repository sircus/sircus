---
title: "Component / Grid"
description: ""
tags: [
    "kicss"
]
date: "2015-02-03"
categories: [
    "components"
]
---

<div class="l-section">
<h3>Container</h3>
<h4>Center block</h4>
{% highlight html linenos %}
<div class="container">...</div>
{% endhighlight %}
</div><!-- /.l-section -->


<div class="l-section">
<h4>Fuild block</h4>
{% highlight html linenos %}
<div class="container-full">...</div>
{% endhighlight %}
</div><!-- /.l-section -->


<div class="l-section">
<h3>Grid - float:left;</h3>
<div class="demo demo-grid">
  <div class="row-float container-full">
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
  </div>
</div><!-- /.demo -->
{% highlight html linenos %}
<div class="row-float">
  <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">...</div>
  <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">...</div>
</div>
{% endhighlight %}
</div><!-- /.l-section -->


<div class="l-section">
<h3>Grid - display:inline-block;</h3>
<div class="demo demo-grid">
  <div class="row-inline-block container-full">
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12" style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12" style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
  </div>
</div><!-- /.demo -->
{% highlight html linenos %}
<div class="row-inline-block">
  <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">...</div>
  <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">...</div>
</div>
{% endhighlight %}
</div><!-- /.l-section -->


<div class="l-section">
<h3>Grid - display:table;</h3>
<div class="demo demo-grid">
  <div class="row-table container-full">
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
  </div>
  <div class="row-table container-full">
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12"style="height:80px;">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
    <div class="col u-xs-12of12 u-sm-3of12 u-md-1of12">&nbsp;</div>
  </div>
</div><!-- /.demo -->
{% highlight html linenos %}
<div class="row-table">
  <div class="col u-xs-6of12">.col.u-xs-6of12</div>
  <div class="col u-xs-6of12">.col.u-xs-6of12</div>
</div>
{% endhighlight %}
</div><!-- /.l-section -->
