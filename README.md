# truncate.js

* Simple and fast read more-less action for HTML text made with pure JavaScript
* Doesn't require JQuery library
* You can style the anchors through more and less classes

### Usage

* First parameter of the class represent the class of the div that contains the text we want to truncate ( `truncateTag` )
* The div must contain only one paragraph tag.
* Second parameter of the class represents the amount of caracters that should be displayed ( `truncateLength` )
>`const truncate = new Truncate(truncateTag, truncatelength)`

### Example :

```
<div class="truncate">
    <p>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Velit euismod in pellentesque massa placerat duis
        ultricies lacus sed. Massa id neque aliquam
        vestibulum. Sit amet luctus venenatis lectus
        magna fringilla urna. Tellus at urna condimentum
        mattis pellentesque id nibh tortor.
        Turpis massa sed elementum tempus egestas sed.
        Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
        Eu mi bibendum neque egestas.
        Scelerisque eleifend donec pretium vulputate
        sapien nec sagittis aliquam malesuada.
        Etiam dignissim diam quis enim lobortis
        scelerisque fermentum. Urna duis convallis
        convallis tellus. Random Text 1
    </p>
</div>
<script>
    // truncate is the tag of the div we want to truncate
    // second parameter is the length of the text that 
    // is displayed
    const truncate = new Truncate('truncate', 400);
</script>
```
