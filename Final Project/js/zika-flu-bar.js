var data = [
  {"state": "Alabama", "disease":"zika", "value": 45},
  {"state": "Alabama", "disease":"flu", "value": 80},
  {"state": "Alaska", "disease":"zika", "value": 41},
  {"state": "Alaska", "disease":"flu", "value": 77},
  {"state": "Arizona", "disease":"zika", "value": 42},
  {"state": "Arizona", "disease":"flu", "value": 98},
  {"state": "Arkansas", "disease":"zika", "value": 40},
  {"state": "Arkansas", "disease":"flu", "value": 82},
  {"state": "California", "disease":"zika", "value": 51},
  {"state": "California", "disease":"flu", "value": 84},
  {"state": "Colorado", "disease":"zika", "value": 68},
  {"state": "Colorado", "disease":"flu", "value": 91},
  {"state": "Connecticut", "disease":"zika", "value": 68},
  {"state": "Connecticut", "disease":"flu", "value": 91},
  {"state": "Delaware", "disease":"zika", "value": 59},
  {"state": "Delaware", "disease":"flu", "value": 80},
  {"state": "Florida", "disease":"zika", "value": 76},
  {"state": "Florida", "disease":"flu", "value": 70},
  {"state": "Georgia", "disease":"zika", "value": 50},
  {"state": "Georgia", "disease":"flu", "value": 77},
  {"state": "Hawaii", "disease":"zika", "value": 57},
  {"state": "Hawaii", "disease":"flu", "value": 71},
  {"state": "Idaho", "disease":"zika", "value": 35},
  {"state": "Idaho", "disease":"flu", "value": 81},
  {"state": "Illinois", "disease":"zika", "value": 54},
  {"state": "Illinois", "disease":"flu", "value": 85},
  {"state": "Indiana", "disease":"zika", "value": 47},
  {"state": "Indiana", "disease":"flu", "value": 87},
  {"state": "Iowa", "disease":"zika", "value": 46},
  {"state": "Iowa", "disease":"flu", "value": 80},
  {"state": "Kansas", "disease":"zika", "value": 32},
  {"state": "Kansas", "disease":"flu", "value": 64},
  {"state": "Kentucky", "disease":"zika", "value": 49},
  {"state": "Kentucky", "disease":"flu", "value": 100},
  {"state": "Louisiana", "disease":"zika", "value": 46},
  {"state": "Louisiana", "disease":"flu", "value": 71},
  {"state": "Maine", "disease":"zika", "value": 53},
  {"state": "Maine", "disease":"flu", "value": 82},
  {"state": "Maryland", "disease":"zika", "value": 73},
  {"state": "Maryland", "disease":"flu", "value": 82},
  {"state": "Massachusetts", "disease":"zika", "value": 65},
  {"state": "Massachusetts", "disease":"flu", "value": 80},
  {"state": "Michigan", "disease":"zika", "value": 49},
  {"state": "Michigan", "disease":"flu", "value": 94},
  {"state": "Minnesota", "disease":"zika", "value": 56},
  {"state": "Minnesota", "disease":"flu", "value": 86},
  {"state": "Mississippi", "disease":"zika", "value": 39},
  {"state": "Mississippi", "disease":"flu", "value": 84},
  {"state": "Missouri", "disease":"zika", "value": 45},
  {"state": "Missouri", "disease":"flu", "value": 84},
  {"state": "Montana", "disease":"zika", "value": 48},
  {"state": "Montana", "disease":"flu", "value": 85},
  {"state": "Nebraska", "disease":"zika", "value": 45},
  {"state": "Nebraska", "disease":"flu", "value": 83},
  {"state": "Nevada", "disease":"zika", "value": 37},
  {"state": "Nevada", "disease":"flu", "value": 74},
  {"state": "New Hampshire", "disease":"zika", "value": 62},
  {"state": "New Hampshire", "disease":"flu", "value": 80},
  {"state": "New Jersey", "disease":"zika", "value": 65},
  {"state": "New Jersey", "disease":"flu", "value": 82},
  {"state": "New Mexico", "disease":"zika", "value": 40},
  {"state": "New Mexico", "disease":"flu", "value": 87},
  {"state": "New York", "disease":"zika", "value": 73},
  {"state": "New York", "disease":"flu", "value": 82},
  {"state": "North Carolina", "disease":"zika", "value": 48},
  {"state": "North Carolina", "disease":"flu", "value": 81},
  {"state": "North Dakota", "disease":"zika", "value": 48},
  {"state": "North Dakota", "disease":"flu", "value": 84},
  {"state": "Ohio", "disease":"zika", "value": 50},
  {"state": "Ohio", "disease":"flu", "value": 83},
  {"state": "Oklahoma", "disease":"zika", "value": 41},
  {"state": "Oklahoma", "disease":"flu", "value": 79},
  {"state": "Oregon", "disease":"zika", "value": 44},
  {"state": "Oregon", "disease":"flu", "value": 80},
  {"state": "Pennsylvania", "disease":"zika", "value": 60},
  {"state": "Pennsylvania", "disease":"flu", "value": 87},
  {"state": "Rhode Island", "disease":"zika", "value": 50},
  {"state": "Rhode Island", "disease":"flu", "value": 91},
  {"state": "South Carolina", "disease":"zika", "value": 41},
  {"state": "South Carolina", "disease":"flu", "value": 84},
  {"state": "South Dakota", "disease":"zika", "value": 47},
  {"state": "South Dakota", "disease":"flu", "value": 80},
  {"state": "Tennessee", "disease":"zika", "value": 45},
  {"state": "Tennessee", "disease":"flu", "value": 90},
  {"state": "Texas", "disease":"zika", "value": 53},
  {"state": "Texas", "disease":"flu", "value": 73},
  {"state": "Utah", "disease":"zika", "value": 46},
  {"state": "Utah", "disease":"flu", "value": 89},
  {"state": "Vermont", "disease":"zika", "value": 64},
  {"state": "Vermont", "disease":"flu", "value": 73},
  {"state": "Virginia", "disease":"zika", "value": 57},
  {"state": "Virginia", "disease":"flu", "value": 83},
  {"state": "Washington", "disease":"zika", "value": 53},
  {"state": "Washington", "disease":"flu", "value": 86},
  {"state": "West Virginia", "disease":"zika", "value": 42},
  {"state": "West Virginia", "disease":"flu", "value": 90},
  {"state": "Wisconsin", "disease":"zika", "value": 49},
  {"state": "Wisconsin", "disease":"flu", "value": 88},
  {"state": "Wyoming", "disease":"zika", "value": 37},
  {"state": "Wyoming", "disease":"flu", "value": 85}]

var visualization = d3plus.viz()
    .container("#svg_zika_flu_bar")
    .data(data)
    .type("bar")
    .id("disease")
    .x("state")
    .y({"stacked": true, "value": "value"})
    .title("Zika vs. Flu (Oct 2015 - March 2016)")
    .footer({"font":{"size":"20px"},"value":"This stacked bar chart highlights how often audiences searched for the flu as opposed to Zika. Overwhelmingly, audiences searched for the flu."})
    .tooltip("state")    // list the keys to show in tooltip
  .draw();


