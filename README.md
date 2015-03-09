# Easy Google Analytics Event Tracking
This is a simple plugin to easily detect and configure Google analytic Event Tracking for any link.

### Whats required

A copy of jquery. I recommend you use the latest one, but really any version that allows you access .data() will work.

And Google Analytics (Universal Code)

### How it works

Once a link is click it searches to see if it has the 2 parameters gatype and galabel. If they are set it will fire off the ga(send) and as long as you have Google Analytics (Universal Code) configured properly on the page it will work. This can be configured to work with the rest of optional parameters but I will leave that up to you.

### The Code

Add the script either in the head or right before the end of the body tag.

```html
<script type="text/javascript" src="js/ga_events.js"></script>
```

Now configure a link on your page.

```html
<a href="http://www.google.com" gatype="text-link" galabel="Homepage - Google Link">Google Link</a>
```

Thats all that is requred. If you run in to any issue feel free to let me know. Always looking for feedback.