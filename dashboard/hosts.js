/**
 * Created by bryanhunt on 17/11/2015.
 */
var url = "http://localhost:8666/haproxy-csv";
var table = d3.select("#viz")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")

var tr = table.append("tr");

function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++) {
        if ((arr1[i].label !== arr2[i].label ) ||
            (arr1[i].value !== arr2[i].value )
        ) {
            return false;
        }
    }
    return true;
}

var oldhosts = [];
function update() {

    var hosts = [];
    console.log("update");
    d3.csv(url, function (error, data) {
        if (error == null) {
            d3.select("#notifications").text("");
            hosts = data.filter(
                function (d) {
                    return d["# pxname"] == "riak_backend_http"
                        && d["svname"] != "BACKEND";
                }
            ).map(function (d) {
                return {"label": d["svname"], "value": d["status"]};
            });

            var selection = d3.select("#viz table tr")
                .selectAll("td").data(hosts);

            if (!arraysAreIdentical(oldhosts, hosts)) {
                console.log("hosts dont match - removing all cells");
                selection.remove();
            }
            oldhosts = hosts;

            selection.exit().remove();

            selection.enter()
                .append("td")
                .style("border", "1px black solid")
                .style("padding", "5px")
                .on("mouseover", function () {
                    d3.select(this).style("background-color", "aliceblue")
                })
                .on("mouseout", function () {
                    d3.select(this).style("background-color", "white")
                })
                .html("<svg id=\'svg\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0\' y=\'0\'\n     width=\'225.802\' height=\'370\' viewBox=\'0, 0, 225.802, 370\'>\n    <g id=\'riak-node\'>\n        <filter id=\'Shadow_1\'>\n            <feGaussianBlur in=\'SourceAlpha\' stdDeviation=\'2.5\'/>\n            <feOffset dx=\'0\' dy=\'2\' result=\'offsetblur\'/>\n            <feFlood flood-color=\'#000000\'/>\n            <feComposite in2=\'offsetblur\' operator=\'in\'/>\n        </filter>\n        <radialGradient id=\'Gradient_1\' gradientUnits=\'userSpaceOnUse\' cx=\'113.127\' cy=\'197.135\' r=\'107.401\'>\n            <stop offset=\'0\' stop-color=\'#FF8626\'/>\n            <stop offset=\'1\' stop-color=\'#E12E00\'/>\n        </radialGradient>\n        <filter id=\'Shadow_2\'>\n            <feGaussianBlur in=\'SourceAlpha\' stdDeviation=\'2.5\'/>\n            <feOffset dx=\'0\' dy=\'2\' result=\'offsetblur\'/>\n            <feFlood flood-color=\'#000000\'/>\n            <feComposite in2=\'offsetblur\' operator=\'in\'/>\n        </filter>\n        <linearGradient id=\'Gradient_2\' gradientUnits=\'userSpaceOnUse\' x1=\'159.355\' y1=\'82.364\' x2=\'159.355\'\n                        y2=\'365.828\'>\n            <stop offset=\'0\' stop-color=\'#95FFA7\'/>\n            <stop offset=\'1\' stop-color=\'#548259\'/>\n        </linearGradient>\n        \n        <g id=\'red-overlay\'><path d=\'M128.47,28.828 L220.528,81.978 L220.528,294.576 L97.784,365.442 C67.098,365.443 21.069,338.868 5.726,312.293 L5.726,99.694 L128.47,28.828\' fill=\'url(#Gradient_1)\'/></g>\n        <g id=\'green-overlay\'> <path d=\'M220.726,82.364 L220.726,294.962 L97.983,365.828 C67.297,365.828 21.268,339.254 5.925,312.679 L5.925,100.08 L128.669,29.214 L220.726,82.364 L220.726,82.364\' fill=\'url(#Gradient_2)\'/></g>\n        <g>\n            \n            <path d=\'M220.726,82.364 L220.726,294.962 L97.983,365.828 C67.297,365.828 21.268,339.254 5.925,312.679 L5.925,100.08 L128.669,29.214 L220.726,82.364 L220.726,82.364 z\'\n                  fill-opacity=\'0\' stroke=\'#000000\' stroke-width=\'5\'/>\n            \n            <path d=\'M6.226,100.194 L6.226,312.793 C21.569,339.368 67.598,365.943 98.284,365.943 L98.284,153.344 C67.598,153.344 21.569,126.769 6.226,100.194 z\'\n                  fill-opacity=\'0\' stroke=\'#000000\' stroke-width=\'5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'\n                  id=\'path3178\'/>\n            <path d=\'M86.148,187.583 C58.683,181.676 31.92,166.699 13.329,145.541\' fill-opacity=\'0\' stroke=\'#000000\'\n                  stroke-width=\'5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' id=\'path3207\'/>\n            <path d=\'M26.641,244.436 C31.708,244.436 35.816,249.239 35.816,255.163 C35.816,261.088 31.708,265.891 26.641,265.891 C21.574,265.891 17.466,261.088 17.466,255.163 C17.466,249.239 21.574,244.436 26.641,244.436 z\'\n                  fill-opacity=\'0\' stroke=\'#000000\' stroke-width=\'5.948\' stroke-linecap=\'round\' stroke-linejoin=\'round\'\n                  id=\'path3215\'/>\n            <path d=\'M26.381,277.662 C31.281,277.662 35.254,282.307 35.254,288.037 C35.254,293.766 31.281,298.411 26.381,298.411 C21.48,298.411 17.508,293.766 17.508,288.037 C17.508,282.307 21.48,277.662 26.381,277.662 z\'\n                  fill-opacity=\'0\' stroke=\'#000000\' stroke-width=\'5.753\' stroke-linecap=\'round\' stroke-linejoin=\'round\'\n                  id=\'path3217\'/>\n            <path d=\'M87.452,212.88 C59.988,206.973 33.225,191.996 14.633,170.838\' fill-opacity=\'0\' stroke=\'#000000\'\n                  stroke-width=\'5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' id=\'path3275\'/>\n            <path d=\'M98.284,153.344 C67.598,153.344 21.569,126.769 6.226,100.194 L128.97,29.328 L221.028,82.478 L98.284,153.344 z\'\n                  fill-opacity=\'0\' stroke=\'#000000\' stroke-width=\'5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'\n                  id=\'path3176\'/>\n        </g>\n    </g>\n</svg>\n")
                .select("svg")
                //-create the svg element
                .each(function (d) {
                    var root = d3.select(this);
                    if (d.value == "UP") {
                        root.select("g#green-overlay").attr("style", "display:inline;");
                        root.select("g#red-overlay").attr("style", "display:none;");
                    } else if (d.value == "DOWN") {
                        root.select("g#green-overlay").attr("style", "display:none;");
                        root.select("g#red-overlay").attr("style", "display:inline;");
                    } else {
                        root.select("g#green-overlay").attr("style", "display:none;");
                        root.select("g#red-overlay").attr("style", "display:none;");
                    }

                })
                .append('text')
                .attr("transform", "matrix(1, 0, 0, 1, 25, 17)")
                .append("tspan")
                .attr("x", 0.401)
                .attr("y", 5.414)
                .attr("style", "font-family:'Helvetica-Bold'; font-size:'50'; fill:'#000000'")
                .attr('fill', '#000000')
                .classed('dataChoose', true)
                .text(function (d) {
                    console.log(d);
                    return d.label + ":" + d.value + "";
                });
            selection.exit().remove();
        } else {
            console.log(error);
            d3.select("#notifications").text("unable to communicate with haproxy");
        }

    });

}
d3.timer(update, 1000);