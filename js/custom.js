$(document).ready(function() {


    //9
    var leftColumn = [
        { top: "215px", left: "360px" },
        { top: "180px", left: "460px" },
        { top: "300px", left: "420px" },
        { top: "335px", left: "310px" },
        { top: "405px", left: "410px" },
        { top: "450px", left: "295px" },
        { top: "540px", left: "345px" },
        { top: "510px", left: "445px" },
        { top: "600px", left: "485px" }
    ];
    //9
    var rightColumn = [
        { top: "215px", left: "860px" },
        { top: "180px", left: "760px" },
        { top: "300px", left: "820px" },
        { top: "335px", left: "910px" },
        { top: "405px", left: "810px" },
        { top: "450px", left: "915px" },
        { top: "540px", left: "875px" },
        { top: "510px", left: "775px" },
        { top: "600px", left: "735px" }
    ];
    //9
    var middleColumn = [
        { top: "200px", left: "610px" },
        { top: "275px", left: "545px" },
        { top: "275px", left: "670px" },
        { top: "375px", left: "695px" },
        { top: "375px", left: "515px" },
        { top: "355px", left: "605px" },
        { top: "470px", left: "675px" },
        { top: "470px", left: "535px" },
        { top: "535px", left: "610px" }
    ];



    function setupHover() {
        $(".img-container")
            .hover(
                function() {
                    // Hover over code
                    var title = $(this).find("span");
                    var $p = $('<p class="tooltip"></p>');
                    $p.html(title.html());
                    $("body").append($p).fadeIn("slow");
                },
                function() {
                    // Hover out code
                    $(".tooltip").remove();
                }
            )
            .mousemove(function(e) {
                var mousex = e.pageX + 20; //Get X coordinates
                var mousey = e.pageY + 10; //Get Y coordinates
                $(".tooltip").css({ top: mousey, left: mousex });
            });
    }

    function assignGroupToColumn(group, column) {
        for (var i = 0; i < group.length && i < column.length; i++) {
            var str =
                '<div class="img-container" style="top:' +
                column[i].top +
                "; left: " +
                column[i].left +
                '"><img src="' +
                group[i].imgUrl +
                '" /><span class="tooltip-content"><strong>' +
                group[i].name +
                "</strong><br><span>" +
                group[i].details.join("</span ><br><span class='" + (i % 2 == 0 ? "even" : "odd") + "' >") +
                "</span></span></div>";


            $(".suggestion-wall").append(str);
        }
    }

    function assignYearArray(array) {
        assignGroupToColumn(array[0], rightColumn);
        assignGroupToColumn(array[1], leftColumn);
        assignGroupToColumn(array[2], middleColumn);
    }


    $("#years").change(function() {
        $(".img-container").remove();
        switch ($("#years").val()) {
            case "2017":
                assignYearArray(groups2017);
                break;
            case "2016":
                assignYearArray(groups2016);
                break;
            case "2015":
                assignYearArray(groups2015);
                break;
        }
        setupHover();
    })
    assignYearArray(groups2017);
    setupHover();
});