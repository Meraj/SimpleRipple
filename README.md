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

        <script type="text/javascript" src="/path/to/simpleripple.js"></script>
    </body>
</html>
```
simpleRipple function get 2 parameter :
```js
simpleRipple(Selector, RippleColorHex = null)
//First parameter required (the element that you want to attach effect)
//Second parameter is nullable (ripple effect color ,as default it's white)
```

# Example :
```html
<a href="#" class="btn">Click Me</a>
               
<script type="text/javascript">
    simpleRipple('.btn');
</script>         
```

if you want to change the ripple color :
```html
<a href="#" class="btn">Click Me</a>
               
<script type="text/javascript">
    simpleRipple('.btn',"#eb4d4b");
</script>         
```
