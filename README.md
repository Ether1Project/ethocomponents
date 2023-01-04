# ethocomponents

This is a footer component for the ETHO project websites. Aim is to have a joint footer for all projects.

It is pretty straight forward and an index.html template is provided.

You need to have in the <head> the following:

```
    Add the following to the header:
```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script async='' src='https://cdn.jsdelivr.net/gh/Ether1Project/ethocomponents/component.js' crossorigin="anonymous"></script>
```

if you want to configure addtional menu entries you can do that via:

The latter is configureable by providing additional menues via the ethocomponent_menu variable in the <HEAD> section

```
    <script>let ethocomponent_menu='' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 1</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>' +
      '';
    </script>

```
    
    
And then add in the beginning of the <body> the header statement
```
<header-component></header-component>
```

and at the end the footer statement

```
<footer-component></footer-component>
```

after the body you need to load the js scripts:

```<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script></html>
```    
    
It should like this 
<img width="1253" alt="Screenshot 2023-01-04 at 15 48 56" src="https://user-images.githubusercontent.com/25107787/210581296-d4186dcd-01a2-4d3b-99f6-a37052786371.png">
