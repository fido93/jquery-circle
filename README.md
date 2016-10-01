# jquery-nextform

A simple form action contain previous,next and submit button.
Inspiration from [Jquery-Steps](https://github.com/rstaib/jquery-steps).

## Getting Started

**jQuery-nextform** is a lightweight UI component written for **jQuery**.

Everything you need to start is:

1. Include **jQuery** and **custom.js** in your HTML code.

```html
</!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="custom.js"></script>
</head>
<body>

<!-- Your copy for circle -->

<div class="col-lg-4 col-md-4 col-sm-4">

    <div class="circle-skill text-center" style="">

        <div class="percircle animate center" data-percent="90">
            <span></span>
        </div>

        <p class="text-margin">UI/UX Design</p>

    </div>


</div>
<div class="col-lg-4 col-md-4 col-sm-4">

    <div class="circle-skill text-center" style="">

        <div class="percircle animate center" data-percent="20">
            <span></span>
        </div>

        <p class="text-margin">PHP</p>

    </div>


</div>

</body>
</html>
```

### How to add more cirlce?

1. Add HTML code like this and add data-percent must be in integer.

```html
<div class="col-lg-4 col-md-4 col-sm-4">

    <div class="circle-skill text-center" style="">

        <div class="percircle animate center" data-percent="20">
            <span></span>
        </div>

        <p class="text-margin">PHP</p>

    </div>


</div>
```


## Demo

[![Demo jquery-nextform alpha](http://imgur.com/YCDiUQ3](http://imgur.com/YCDiUQ3)


## Bug Reports & Feature Requests

You can help by reporting bugs, suggesting features, reviewing feature specifications or just by sharing your opinion.

Use [GitHub Issues](https://github.com/fido93/jquery-nextform/issues) for all of that.



## License

Copyright (c) 2016 FidoUnity. See [LICENSE](https://github.com/fido93/jquery-nextform/blob/master/LICENSE) for more details.
