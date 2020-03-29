---
title: Sass - a css extension I hope I wish I'd known a long time ago
tags:
categories:
- Coding
---

On my progress on learning to build a blog for my own, I came across Sass, which is an extension for css. It is probably one of the most mind blowing extension I came across, it could save u a whole lot of time trying to adjust html layout through css with its couple really cool features to help u coding for css.

### Sass Features 

One of best Sass features, also my favourite, is to able store anything u want in a variable. Like anything, color code or font style that u like but have troublesome to remember it, an image logo that u will be using often around ur webpage, margin setting that u will be use a lot, etc.

![Shock](https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif)

It makes coding css much simpler when u can spend less time to figure out all those color code or property setting that u going to use often.

#### Example:

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
