var maxNumberOfSections;
    var distanceFromTopOfScreen;
    var currentSection;
    var nextSection;

    function generateWidthAndHeightProperties() {

        //get the total number of paragraphs
        maxNumberOfSections = $(".section").length;

        //stores the current position of window
        distanceFromTopOfScreen = $(window).scrollTop();

        //create an array that stores the % value of each <section> in relation to total article length
        var eachSectionsPercentageOfWindow = [];

        var i = 0;

        while (i < maxNumberOfSections) {

            //pixel distance between top of current section and top of window
            currentSection = $(".section").eq(i).offset().top

            //pixel distance between top of next section and top of window
            if (i < maxNumberOfSections - 1) {
                nextSection = $(".section").eq(i + 1).offset().top;
            }
            else {
                nextSection = $(document).height();
            }

            //distance between section you're on and the next section
            distanceBetweenSections = nextSection - currentSection;

            //caclulates a section's percentage of total article
            eachSectionsPercentageOfWindow[i] = (((nextSection - currentSection) / $(".hipsum").height()) * 100);

            //assign each bar-section a percentage of window
            var totalAmountOfScrollerDiv = (totalAmountOfScrollerDiv + $(".bar-section").eq(i).width());

            $(".bar-section").eq(i).css({
                width: "" + (eachSectionsPercentageOfWindow[i] - .63) + "%"
            });
            i++;
        }
    }

    $(document).ready(function() {
        generateWidthAndHeightProperties();
        console.log(maxNumberOfSections);
        //moves the mover bar to the right when scrolling from one section to the next
        $(window).scroll(function() {
            var i = 0;
            while (i < maxNumberOfSections) {
                currentSection = $(".section").eq(i).offset().top;
                if (i < maxNumberOfSections - 1) {
                    nextSection = ($(".section").eq(i + 1).offset().top);
                } else {
                    nextSection = $(document).height();
                }
                distanceFromTopOfScreen = ($(window).scrollTop() + 100);
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    $(".bar-section").eq(i).css('background-color', '#1b1e2c');
                }
                if (distanceFromTopOfScreen >= currentSection) {
                    if (distanceFromTopOfScreen <= nextSection) {
                        $(".mover-bar").css({
                            left: ($(".bar-section").eq(i).offset().left)
                        });
                        $(".bar-section").eq(Math.max(0, i - 1)).css('background-color', '#1b1e2c');
                        return
                    }
                }
                i++;
            }
        });

        //wraps the mover bar sections in anchor links
        function wrapMenuLinks() {
            var i = 0;
            var numberOfBarSections = $(".number").length;
            while (i < numberOfBarSections) {
                var classToWrap = $("#bar-section" + i)
                var linkToWrapWith = "<a href='#section" + i + "'></a>"
                classToWrap.wrapInner(linkToWrapWith);
                i++;
            }
        }
        wrapMenuLinks();

        $(".bar-section a").click(function() {
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });

    });