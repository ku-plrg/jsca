import { readFileSync } from 'fs';
import _ from 'lodash';
const target_lib = []
const lib_map = {
    "amplifyjs": ["AmplifyJS", "amplifyjs", "amplifyjs"],
    "angular": ["Angular", "@angular/core", "angular"],
    "angular.js": ["AngularJS", "angular", "angular.js"],
    "backbone.js": ["Backbone", "backbone", "backbone.js"],
    "bootstrap": ["Bootstrap", "bootstrap", "bootstrap"],
    "camanjs": ["CamanJS", "caman", "camanjs"],
    "can.js": ["Can", "can", "can.js"],
    "google-closure-library": ["Closure Library", "google-closure-library", "google-closure-library"],
    "core-js": ["core-js", "core-js-bundle", "core-js"],
    "d3": ["D3", "d3", "d3"],
    "dc": ["DC.js", "dc", "dc"],
    "dojo": ["Dojo", "dojo", "dojo"],
    "extjs": ["Ext JS", "", "extjs"],
    "fabric.js": ["Fabric.js", "fabric", "fabric.js"],
    "fastclick": ["FastClick", "fastclick", "fastclick"],
    "flexslider": ["FlexSlider", "flexslider", "flexslider"],
    "flot": ["FlotCharts", "flot", "flot"],
    "fuse.js": ["FuseJS", "fuse.js", "fuse.js"],
    "graphael": ["gRaphaël", "graphael", "graphael"],
    "gsap": ["GreenSock JS", "gsap", "gsap"],
    "hammer.js": ["Hammer.js", "hammerjs", "hammer.js"],
    "handlebars.js": ["Handlebars", "handlebars", "handlebars.js"],
    "handsontable": ["Handsontable", "handsontable", "handsontable"],
    "headjs": ["Head JS", "headjs", "headjs"],
    "highcharts": ["Highcharts", "highcharts", "highcharts"],
    "ifvisible": ["IfVisible.js", "ifvisible.js", "ifvisible"],
    "ink": ["Ink", "", "ink"],
    "ionic": ["Ionic", "@ionic/cli", "ionic"],
    "jquery.isotope": ["Isotope", "isotope-layout", "jquery.isotope"],
    "jquery": ["jQuery", "jquery", "jquery"],
    "jquery-mobile": ["jQuery Mobile", "jquery-mobile", "jquery-mobile"],
    "jquery-tools": ["jQuery Tools", "", "jquery-tools"],
    "jqueryui": ["jQuery UI", "jquery-ui", "jqueryui"],
    "kendo-ui-core": ["Kendo UI", "kendo-ui-core", "kendo-ui-core"],
    "knockout": ["Knockout", "knockout", "knockout"],
    "labjs": ["LABjs", "labjs", "labjs"],
    "leaflet": ["Leaflet", "leaflet", "leaflet"],
    "lodash.js": ["Lo-Dash", "lodash", "lodash.js"],
    "mapbox-gl": ["Mapbox", "mapbox-gl", "mapbox-gl"],
    "marionette": ["Marionette", "backbone.marionette", "marionette"],
    "material-design-lite": ["Material Design Lite", "material-design-lite", "material-design-lite"],
    "matter-js": ["Matter.js", "matter-js", "matter-js"],
    "modernizr": ["Modernizr", "modernizr", "modernizr"],
    "moment-timezone": ["Moment Timezone", "moment-timezone", "moment-timezone"],
    "moment.js": ["Moment.js", "moment", "moment.js"],
    "mootools": ["MooTools", "mootools", "mootools"],
    "move.js": ["Move", "move-js", "move.js"],
    "numeral.js": ["Numeral.js", "Numeral", "numeral.js"],
    "paper.js": ["Paper.js", "paper", "paper.js"],
    "pixi.js": ["Pixi.js", "pixi.js", "pixi.js"],
    "preact": ["Preact", "preact", "preact"],
    "processing.js": ["Processing.js", "", "processing.js"],
    "prototype": ["Prototype", "", "prototype"],
    "pusher": ["Pusher", "pusher", "pusher"],
    "qooxdoo": ["Qooxdoo", "@qooxdoo/framework", "qooxdoo"],
    "raphael": ["Raphaël", "raphael", "raphael"],
    "require.js": ["RequireJS", "requirejs", "require.js"],
    "riot": ["Riot", "riot-cli", "riot"],
    "sammy.js": ["Sammy", "sammy", "sammy.js"],
    "scriptaculous": ["Scriptaculous", "", "scriptaculous"],
    "ScrollMagic": ["ScrollMagic", "scrollmagic", "ScrollMagic"],
    "seajs": ["Sea.js", "seajs", "seajs"],
    "socket.io": ["Socket.IO", "socket.io-client", "socket.io"],
    "spf": ["SPF", "spf", "spf"],
    "spinejs": ["Spine", "spine", "spinejs"],
    "swfobject": ["SWFObject", "swfobject", "swfobject"],
    "three.js": ["three.js", "three.js", "three.js"],
    "tween.js": ["Tween.js", "tween.js", "tween.js"],
    "two.js": ["Two", "two.js", "two.js"],
    "underscore.js": ["Underscore", "underscore", "underscore.js"],
    "velocity": ["Velocity.js", "velocity-react", "velocity"],
    "visibility.js": ["Visibility.js", "visibilityjs", "visibility.js"],
    "vue": ["Vue", "vue", "vue"],
    "webfont": ["WebFont Loader", "webfont", "webfont"],
    "yepnope": ["yepnope", "yepnope", "yepnope"],
    "yui": ["YUI 3", "yui", "yui"],
    "zepto": ["Zepto.js", "zepto", "zepto"],
    "superagent": ["superagent", "superagent", "superagent"],
    "redux": ["redux", "redux", "redux"],
    "styled-components": ["styled-components", "styled-components", "styled-components"],
    "pdf.js": ["pdf.js", "pdfjs", "pdf.js"],
    "dayjs": ["dayjs", "dayjs", "dayjs"],
    "react": ["react", "react", "react"],
    "react-dom": ["react-dom", "react-dom", "react-dom"]
  };
const inputData = readFileSync('final.csv', 'utf8');

  function analyzeLibraryUsage(csvData) {
    // Split the input into rows and clean up
    const rows = csvData.split('\n')
      .map(row => row.trim())
      .filter(row => row.length > 0);
    const headerRow = rows[0];
    const dataRows = rows.slice(1);
    
    
    // Process each row into library sets
    const librarySets = dataRows.map(row => {
          return row.split(',')
            .map(lib => lib.trim())
            .filter(lib => lib.length > 0);
    });
  
    // Analyze individual library usage
    const libraryFrequency = {};
    librarySets.forEach(sets => {
      sets.forEach(libraries => {
        libraries.forEach(lib => {
          libraryFrequency[lib] = (libraryFrequency[lib] || 0) + 1;
        });
      });
    });
  
  
  
    // Prepare summary
    const summary = {
      totalRows: dataRows.length,
      topLibraries: _.orderBy(
        Object.entries(libraryFrequency),
        [1], ['desc']
      ).slice(0, 10),
    };
  
    // Format results for display
    return {
      "요약 통계": {
        "총 데이터 수": summary.totalRows,
        "그룹당 평균 라이브러리 수": summary.averageLibrariesPerGroup
      },
      "가장 많이 사용된 라이브러리 (상위 10개)": 
        summary.topLibraries.map(([lib, count]) => 
          `${lib}: ${count}회`
        ),
    };
  }
  
  const results = analyzeLibraryUsage(inputData);
  console.log(JSON.stringify(results, null, 2));
  