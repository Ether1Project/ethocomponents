# ethocomponents

This is a footer component for the ETHO project websites. Aim is to have a joint footer for all projects.

It is pretty straight forward and an index.html template is provided.

And then add after the body the footer statement
```
<header-component></header-component>
```

The latter is configureable by providing additional menues via the ethocomponent_menu variable in the <HEAD> section

```
    <script>let ethocomponent_menu='' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 1</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>' +
      '';
    </script>

```



```
<footer-component></footer-component>
```

It should like this 
<img width="1253" alt="Screenshot 2023-01-04 at 15 48 56" src="https://user-images.githubusercontent.com/25107787/210581296-d4186dcd-01a2-4d3b-99f6-a37052786371.png">
