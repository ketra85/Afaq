import React from "react";
import Chart from "react-google-charts";

var timelineColor = {
  primary: "#791049",
  secondary: "#818a8f",
  black: "#343a40",
  background: "#f8f9fa",
  none: "opacity: 0;"
};
var timelineStyleClass = {
  active: timelineColor["primary"],
  past: timelineColor["secondary"],
  future: timelineColor["secondary"],
  training: timelineColor["none"]
};
var timelineFont = "sans-serif";
var timelineDateFormat = "MM/dd/yyyy";
var timelineTrainingLogos = {
  IATA:
    "https://cdn.freebiesupply.com/logos/large/2x/iata-1-logo-png-transparent.png",
  "rolls royce":
    "https://www.stickpng.com/assets/images/584290c1a6515b1e0ad75ac3.png",
  GEMS: "https://img.techpowerup.org/200109/favicon-nog-icon.png"
};
var timelineIconScale = 1.5;
var timelineData = [
  // Months starts from 0 as January
  // projects should always be the first item
  // TODO : less dates?
  ["Projects", "QAMS", new Date(2019, 12, 1), new Date(2020, 2, 28)],
  ["Projects", "CROAMIS", new Date(2019, 8, 24), new Date(2019, 10, 30)],
  ["Projects", "TRAX", new Date(2019, 9, 21), new Date(2020, 1, 21)],
  ["Trainings", "IATA", new Date(2019, 11, 9), new Date(2019, 12, 14)],
  ["Trainings", "rolls royce", new Date(2020, 1, 9), new Date(2020, 2, 14)],
  ["Trainings", "GEMS", new Date(2019, 10, 9), new Date(2019, 10, 14)]
];

function getColumn(table, col) {
  return table.map(function(val) {
    return val[col];
  });
}

function timeMin(arr) {
  return arr.reduce(function(a, b) {
    return a <= b ? a : b;
  });
}

function timeMax(arr) {
  return arr.reduce(function(a, b) {
    return a <= b ? b : a;
  });
}

var dateRangeStart = getColumn(timelineData, 2);
var dateRangeEnd = getColumn(timelineData, 3);
timelineData = [
  [
    { type: "string", id: "Acivety" },
    { type: "string", id: "Title" },
    { type: "string", id: "style", role: "style" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" }
  ]
].concat(timelineData);

var timelineOptions = {
  timeline: {
    groupByRowLabel: true,
    showRowLabels: true,
    rowLabelStyle: {
      fontName: timelineFont,
      fontSize: 16
    }, // TODO: Font family + font Size
    barLabelStyle: {
      fontName: timelineFont,
      fontSize: 16
    }
  },
  backgroundColor: timelineColor["background"]
};
function setTimelineStyle(data) {
  /* Input : Data list of lists of [Activety type, Lable, Start Date, End Date].          *
   * Process: Compute the appropriate style class from the Start and End dates.           *
   * Output: Modified list where the second index repreresent the style class appropriate.*/
  var i = 1;
  var style;
  var today = new Date();
  var startDate;
  var endDate;
  for (i; i < data.length; i++) {
    startDate = data[i][2];
    endDate = data[i][3];
    if (data[i][0] === "Trainings") {
      style = timelineStyleClass["training"];
    } else if (startDate <= today && endDate >= today) {
      style = timelineStyleClass["active"];
    } else if (startDate > today) {
      style = timelineStyleClass["future"];
    } else if (endDate < today) {
      style = timelineStyleClass["past"];
    }
    data[i].splice(2, 0, style);
  }
  return data;
}

function customize() {
  var container = document.getElementById("timeline");
  var chartWidth = parseFloat(
    container.getElementsByTagName("rect")[0].getAttribute("width"),
    10
  );
  Array.prototype.forEach.call(container.getElementsByTagName("rect"), function(
    rect
  ) {
    var xPos = parseFloat(rect.getAttribute("x"));
    /*if ((xPos > 0) && (xPos < 10)) {
        rect.setAttribute('x', xPos + 10);
        rect.setAttribute('width', parseFloat(rect.getAttribute('width')) -10);
      }*/
    if (
      xPos > 0 &&
      xPos + parseFloat(rect.getAttribute("width")) > chartWidth - 10
    ) {
      rect.setAttribute("width", chartWidth - xPos - 10);
    }
    if (parseFloat(rect.getAttribute("x")) > 0) {
      rect.setAttribute("rx", 3);
      rect.setAttribute("ry", 3);
      var lable = rect.nextSibling;
      var centerOffset = parseFloat(rect.getAttribute("width"), 10) / 2;
      if (lable) {
        lable.setAttribute(
          "x",
          parseFloat(rect.getAttribute("x"), 10) + centerOffset
        );
      }
    }
  });
  Array.prototype.forEach.call(container.getElementsByTagName("text"), function(
    text
  ) {
    if (timelineTrainingLogos[text.innerHTML]) {
      text.setAttribute("opacity", 0); // hide text
    }
    text.setAttribute("text-anchor", "middle");
    if (parseFloat(text.getAttribute("x")) < 100) {
      text.setAttribute("x", "40");
    }
  });

  Array.prototype.forEach.call(container.getElementsByTagName("path"), function(
    path
  ) {
    path.setAttribute("opacity", "0");
  });
}

function createImage(options) {
  var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttributeNS(null, "height", options.height);
  image.setAttributeNS(null, "width", options.width);
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", options.href);
  image.setAttributeNS(null, "x", options.x);
  image.setAttributeNS(null, "y", options.y);
  image.setAttributeNS(null, "visibility", "visible");
  return image;
}

function configureChart() {
  var chartContainer = document.getElementById("timeline");
  var svg = chartContainer.getElementsByTagName("svg")[0];

  var barLabels = svg.querySelectorAll("text[text-anchor='middle']");
  for (var i = 0; i < barLabels.length; i++) {
    if (timelineTrainingLogos[barLabels[i].innerHTML]) {
      var barArea = barLabels[i].previousSibling;
      var w = timelineIconScale * parseFloat(barArea.getAttribute("width"), 10);
      var h =
        timelineIconScale * parseFloat(barArea.getAttribute("height"), 10);
      var x = parseFloat(barArea.getAttribute("x"), 10) - w / 4;
      var y = parseFloat(barArea.getAttribute("y"), 10) - h / 4;
      var trainingIcon = createImage({
        href: timelineTrainingLogos[barLabels[i].innerHTML],
        x: x,
        y: y,
        width: w,
        height: h
      });
      barArea.parentElement.appendChild(trainingIcon);
      //barLabels[i].setAttribute('x', parseFloat(x));
    }
  }
}

function addMarker(markerDate) {
  var baseline;
  var baselineBounds;
  var chartElements;
  var markerLabel;
  var markerLine;
  var markerTriangle;
  var markerSpan;
  var svg;
  var timeline;
  var timelineUnit;
  var timelineWidth;
  var timespan;
  var container = document.getElementById("timeline");

  baseline = null;
  timeline = null;
  svg = null;
  markerLabel = null;
  chartElements = container.getElementsByTagName("svg");
  if (chartElements.length > 0) {
    svg = chartElements[0];
  }
  chartElements = container.getElementsByTagName("rect");
  if (chartElements.length > 0) {
    timeline = chartElements[0];
  }
  chartElements = container.getElementsByTagName("path");
  if (chartElements.length > 0) {
    baseline = chartElements[0];
  }
  chartElements = container.getElementsByTagName("text");
  if (chartElements.length > 0) {
    markerLabel = chartElements[0].cloneNode(true);
  }
  if (
    svg === null ||
    timeline === null ||
    baseline === null ||
    markerLabel === null ||
    markerDate.getTime() < timeMin(dateRangeStart).getTime() ||
    markerDate.getTime() > timeMax(dateRangeEnd).getTime()
  ) {
    return;
  }

  // calculate placement
  timelineWidth = parseFloat(timeline.getAttribute("width"));
  baselineBounds = baseline.getBBox();
  timespan =
    timeMax(dateRangeEnd).getTime() - timeMin(dateRangeStart).getTime();
  timelineUnit = (timelineWidth - baselineBounds.x) / timespan;
  markerSpan = markerDate.getTime() - timeMin(dateRangeStart).getTime();
  var xOffset = baselineBounds.x + timelineUnit * markerSpan;

  // add line
  markerLine = timeline.cloneNode(true);
  markerLine.setAttribute("y", timeline.getAttribute("y"));
  markerLine.setAttribute("x", xOffset - 1);
  var rects = svg.getElementsByTagName("rect");
  markerLine.setAttribute(
    "height",
    parseFloat(rects[0].getAttribute("height")) +
      parseFloat(rects[1].getAttribute("height"))
  );
  markerLine.setAttribute("width", 2);
  markerLine.setAttribute("stroke", timelineColor["black"]);
  markerLine.setAttribute("fill", timelineColor["black"]);
  svg.appendChild(markerLine);

  //add triangle
  markerTriangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  var xy = xOffset - 6 + ",0 ";
  var xy2 = xOffset + 6 + ",0 ";
  var xy3 = xOffset + ",5 ";
  var points = xy + xy2 + xy3;
  markerTriangle.setAttribute("points", points);
  markerTriangle.setAttribute("stroke-width", 0);
  markerTriangle.setAttribute("stroke", "white");
  markerTriangle.setAttribute("fill", timelineColor["black"]);
  markerTriangle.setAttribute("y", timeline.getAttribute("y"));
  markerTriangle.setAttribute("x", xOffset);

  svg.appendChild(markerTriangle);

  var locationIcon = document.getElementById("locationIcon");
  locationIcon.setAttribute(
    "style",
    "position : relative; left:" + (xOffset - 8) + "px"
  );
}
var observer = new MutationObserver(customize);
function customizeTimeline() {
  var chartContainer = document.getElementById("timeline");
  customize();
  addMarker(new Date());
  configureChart();
  observer.observe(chartContainer, {
    childList: true,
    subtree: true
  });
}

const timelineChartEvents = [
  {
    callback: ({ chartWrapper, google }) => {
      const chart = chartWrapper.getChart();
      google.visualization.events.addListener(
        chart,
        "ready",
        customizeTimeline()
      );
    },
    eventName: "ready"
  },
  {
    callback: ({ chartWrapper, google }) => {
      const chart = chartWrapper.getChart();
      google.visualization.events.addListener(
        chart,
        "onmouseover",
        customizeTimeline()
      );
    },
    eventName: "onmouseover"
  }
];

class AfaqTimeline extends React.Component {
  render() {
    return (
      <Chart
        width={"100%"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={setTimelineStyle(timelineData)}
        options={timelineOptions}
        rootProps={{ "data-testid": "1" }}
        chartEvents={timelineChartEvents}
      />
    );
  }
}

export default AfaqTimeline;
