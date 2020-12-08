# SimpleRipple

easiest way to add ripple to any element

Include simpleripple.css and simpleripple.js to your HTML file 
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>

        <link rel="stylesheet" type="text/css" href="/path/to/simpleripple.css" />
    </head>
    <body>
        <a href="#" class="btn">Click Me</a>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="/path/to/simpleripple.js"></script>
    </body>
</html>
```
*don't forget to add jquery*
simpleRipple function get 2 parameter :
```js
simpleRipple(Selector, null)
//First parameter required (the element that you want to attach effect)
//Second parameter is nullable (options)
```

# Example :
```html
<a href="#" class="btn">Click Me</a>
               
<script type="text/javascript">
    simpleRipple('.btn');
</script>         
```

options :
```html
<a href="#" class="btn">Click Me</a>
               
<script type="text/javascript">
    simpleRipple('.btn',{ 
    //ripple color
      color:"#FFF",
    //ripple opacity
      opacity:0.4,
    //ripple duration
      duration:0.4,
    //easing function of the ripple
      easing:"linear"
  });
</script>         
```
