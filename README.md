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
Add the following code to your index.js to append a default y-axis to the .plot object (grey here but is not normally visible). Bye default there are no tick on an ordinal y-axis, these are set to zero

```
const myYAxis = gAxis.yaxisOrdinal()
currentFrame.plot()
	.call(myYAxis);
```

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/default.png)

Set the <b>.rangeRound()</b> to the current frams height to make the axis correctly fit in the <b>.plot</b> object.

```
const myYAxis = gAxis.yaxisOrdinal()
    .rangeRound([0, currentFrame.dimension().height]);

currentFrame.plot()
    .call(myYAxis)
```

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/range.png)

Specify your the <b>.domain </b> in the same way that would in any other d3 axis

```
const myYAxis = gAxis.yaxisOrdinal()
    .rangeRound([0, currentFrame.dimension().height])
    .domain(myCatagories);
    
currentFrame.plot()
    .call(myYAxis)
```

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/domain.png)

### Positioning
The rendered axis returns the width of the ticks text via <b>.labelWidth()</b>.

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/labelWidth.png)

.labelWidth() is used to amend the margin of the current frame element so that tick text is positioned outside the <b>.plot()</b> area.

```
let newMargin = myYAxis.labelWidth()+currentFrame.margin().left;
currentFrame.margin({left:newMargin});
d3.select(currentFrame.plot().node().parentNode)
    .call(currentFrame);
```

![alt tag](https://github.com/ft-interactive/g-yaxisOrdinal/blob/master/images/newWidth.png)

The current frame can then still be used to correctly define the .range() values of an x-axis. If ticks are aligned to the right then the right hand margin should be ammended instaed of the left
