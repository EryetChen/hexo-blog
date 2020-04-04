---
title: Sass - a css extension I hope I wish I'd known a long time ago
categories:
- Coding
tags:
- English
date: 2020-03-29 16:14:15
---


On my progress on learning to build a blog for my own, I came across [Sass](https://sass-lang.com/), which is an extension for css. It is probably one of the best css extension I came across, it could save u a whole lot of time trying to adjust html layout through css with its couple really cool features to help u coding for css.

### Why choose Sass over traditional css

- familiar coding style like other programming languange such as Java
- lots of features
- Sass is actively supported and developed

### Sass Features 

#### Variables

One of best Sass features, also my favourite, is to able store anything u want in a variable. Like anything, color code or font style that u like but have troublesome to remember it, an image logo that u will be using often around ur webpage, margin setting that u will be use a lot, etc.

![Shock](https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif)

It makes coding css much simpler when u can spend less time to figure out all those color code or property setting that u going to use often.

##### Example:

``` scss
$myFavouriteColor: #ADD8E6; // light blue color code

p {
  background-color: $myFavouriteColor;
}

$myFavouriteSetting: url(myHandsomeFace.jpg) 0 0;

.avatar {
    background-image: $myFavouriteSetting;
}

```
___

#### Mixins

Mixins is basically like function in programming, where <code>@mixin</code> allow you to declare a function of css and <code>@include</code> will print out css declarations inside the function.

##### Example:

``` scss
// without parameter
@mixin setting() {
  background-color: #F1F1F1;
  text-align: center;
  padding: 20px;
}

head {
  @include setting();
}

// with parameter

@mixin setting($color, $position, $pixel) {
  background-color: $color;
  text-align: $position;
  padding: $pixel;
}

head {
  @include setting(#F1F1F1, center, 20px);
}

```

___

There is still a lot of features Sass offer, like able use operator to perform calculation and much more, detailed guide was on their [website](https://sass-lang.com/guide). I highly recommened to try out sass if u find urself annoyed with css.