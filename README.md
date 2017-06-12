# yaxisOrdinal

Pre styled ordinal y-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates an ordinal y-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard y-axis.

Will also work with other builds where the axis is called into an svg.


### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="https://rawgit.com/ft-interactive/g-yaxisOrdinal/master/build/g-yaxisOrdinal.js"> </script>

```


### NPM install
Not yet deployed

## Getting started
Add the following code to your index.js to append a default y-axis to the .plot object (grey here but is not normally visible)

```
const myYAxis = yaxisOrdinal()
currentFrame.plot()
	.call(myYAxis);
```

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/default.png)

Set the <b>.range()</b> and the <b>.ticksize()</b> to the dimensions of the current frame