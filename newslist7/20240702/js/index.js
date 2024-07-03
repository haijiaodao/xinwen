$(document).ready(function() {
    $("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        switch((stepClass-0)){
            case 1:
            $("#title").text("永远跟党走");
            $("#content1").text("践行初心使命，诠释“永远跟党走”的绝对忠诚。没有中国共产党，就没有新中国。中国共产党成立以来，始终坚持“为中国人民谋幸福,为中华民族谋复兴”初心和使命，带领全国各族人民，从新民主主义革命时期的“救国”、社会主义革命和社会主义建设时期的“兴国”、改革开放和社会主义现代化建设新时期“富国”，到现如今的新时代中国特色社会主义的“强国”之路，始终坚持以人民为中心，把为中国人民谋幸福、为中华民族谋复兴作为一切工作的核心。无论何时何地何种岗位，每一名共产党员都应时刻牢记这种初心使命，立足工作岗位，积极奉献自己的青春热血，牢记自己的入党誓言，随时准备为党和人民的事业牺牲一切，为共产主义奋斗终生。");
            $("#content2").text("");
            break;
        case 2:
            $("#title").text("永远跟党走");
            $("#content1").text("在党爱党，还要在党为党，更要在党兴党。“永远跟党走”，不是一句空话，更不是喊喊口号、做做样子，既要见思想，更要见行动。要始终牢记自己是一名共产党员，在任何时候都要做到“一眼看认出来”，敢于在面对困难时挺身而出，在面对矛盾和问题时迎难而上，在克难攻坚时冲在最前面，以实际行动，把“永远跟党走”体现到行动上，体现在推动工作、狠抓落实的具体行动和实际成效中，以更加务实的作风、更有成效的行动、更加良好的姿态，带领广大群众，坚定不移走好中国特色社会主义道路，不断创造美好新未来。");
            $("#content2").text("");
            break; 
        case 3:
            $("#title").text("永远跟党走");
            $("#content1").text("胸怀千秋伟业，恰是百年风华。行走在全面建设社会主义现代化国家的新征程上，我们更应该以组织开展“永远跟党走”群众性主题实践活动为契机，从百年党史中厚植坚定的信仰信念、扛起为民服务的使命担当、汲取奋斗前行的磅礴力量，更加坚定“永远跟党走”信心信念，团结带领广大群众团结一心、实干苦干、接力奋进，以优异成绩向党的百年华诞献礼，以推动改革发展的新奇迹诠释共产党人的初心使命。");
            $("#content2").text("");
            break;
        case 4:
            $("#title").text("永远跟党走");
            $("#content1").text("全面从严治党，永葆“永远跟党走”的干净廉洁。党的十八大以来，党中央身体力行、率先垂范，坚持思想建党、组织建党和制度治党紧密结合，集中整饬党风，严厉惩治腐败，净化党内政治生态，从抓思想、抓管党、抓执纪、抓治吏、抓作风、抓反腐六个重点方面推进全面从严治党。经过几年努力，全面从严治党取得显著成效，党内正气在上升，党风在好转，社会风气在上扬。在新的历史条件下，进行具有许多新的历史特点的伟大斗争，推进中国特色社会主义伟大事业，必须以更大力度推进党的建设新的伟大工程，坚定不移推进全面从严治党，认真贯彻执行《关于新形势下党内政治生活的若干准则》《中国共产党党内监督条例》，切实把党建设好、管理好，保持党的先进性和纯洁性，增强党的创造力凝聚力战斗力，提高党的领导水平和执政水平，确保党始终成为中国特色社会主义事业的坚强领导核心，为实现富强民主文明和谐美丽的社会主义现代化强国奋斗目标和中华民族伟大复兴的中国梦提供根本保证。");
            $("#content2").text("");
            break; 
        case 5:
            $("#title").text("永远跟党走");
            $("#content1").text("牢记殷切嘱托，勇挑“永远跟党走”的历史担当。回顾党的百年光辉历程，我们党矢志不渝地践行为中国人民谋幸福、为中华民族谋复兴的初心使命，迎难而上、担当作为，永葆斗争精神，审时度势、科学决策，战胜了前进道路上的各种困难，取得了一个又一个胜利。历史车轮滚滚向前，时代潮流浩浩荡荡。我们的道路越走越宽广、越走越光明。经过几代人的接续奋斗和长期努力，全面建成小康社会取得伟大历史性成就，全面建设社会主义现代化国家新征程顺利开启。一代人有一代人的使命。让我们担负“永远跟党走”的历史使命，做历史洪流中的坚定者、奋进者和搏击者，沿着中国特色社会主义这条正确道路坚定不移走下去，朝着实现中华民族伟大复兴的中国梦奋勇前进。");
            break;  
        default:
            $("#title").text("永远跟党走");
            $("#content1").text("当前，面对世界百年未有之大变局，我们党面临的“四大考验”是长期的和复杂的，“四种危险”是尖锐的和严峻的。面对波谲云诡的国际形势、复杂敏感的周边环境、艰巨繁重的改革发展稳定任务，我们要战胜来自国内外的各种重大风险挑战，夺取中国特色社会主义新胜利，必须全面加强党的自身建设，必须与时俱进地继承好、发扬好党的革命传统和优良作风，传承好党的红色基因，始终保持革命战争年代那么一股劲、那么一股气、那么一种革命精神，我们党就能够永远立于不败之地。.");
            $("#content2").text("实践是理论之源。坚持真理，需要掌握真理。坚持真理，更需要在实践中不断发展真理。坚持真理，还需要始终保持追求真理的勇气。每一名共产党员，都应当时刻不忘初心、牢记使命，永远在马克思主义伟大真理旗帜指引下不断前行，立足平凡的工作岗位，用自己的辛勤劳动，默默耕耘，让继承和发扬党的革命传统和优良作风不断绽放出新时代的绚丽光彩。 ");
            break; 
          }
        currentNum=step.substr(6,1)-0+1;
        
    });


    //slideshow style interval
    var autoSwap = setInterval( swap,5000);
    var currentNum = 2;
    //pause slideshow and reinstantiate on mouseout
    $('#read-more a, #steps-menu a').hover(
      function () {
        clearInterval(autoSwap);
    }, 
      function () {
       autoSwap = setInterval( swap,5000);
    });

    //swap images function
    function swap(action) {
      $("#bbp").fadeOut(100);

        console.log(currentNum);
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().addClass("is-active");
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().siblings().removeClass("is-active");
        var step = $("#steps-menu li a:eq("+ (currentNum-1) +")").attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);

        switch(currentNum){
          case 1:
            $("#title").text("永远跟党走");
            $("#content1").text("践行初心使命，诠释“永远跟党走”的绝对忠诚。没有中国共产党，就没有新中国。中国共产党成立以来，始终坚持“为中国人民谋幸福,为中华民族谋复兴”初心和使命，带领全国各族人民，从新民主主义革命时期的“救国”、社会主义革命和社会主义建设时期的“兴国”、改革开放和社会主义现代化建设新时期“富国”，到现如今的新时代中国特色社会主义的“强国”之路，始终坚持以人民为中心，把为中国人民谋幸福、为中华民族谋复兴作为一切工作的核心。无论何时何地何种岗位，每一名共产党员都应时刻牢记这种初心使命，立足工作岗位，积极奉献自己的青春热血，牢记自己的入党誓言，随时准备为党和人民的事业牺牲一切，为共产主义奋斗终生。");
            $("#content2").text("");
            break;
        case 2:
            $("#title").text("永远跟党走");
            $("#content1").text("在党爱党，还要在党为党，更要在党兴党。“永远跟党走”，不是一句空话，更不是喊喊口号、做做样子，既要见思想，更要见行动。要始终牢记自己是一名共产党员，在任何时候都要做到“一眼看认出来”，敢于在面对困难时挺身而出，在面对矛盾和问题时迎难而上，在克难攻坚时冲在最前面，以实际行动，把“永远跟党走”体现到行动上，体现在推动工作、狠抓落实的具体行动和实际成效中，以更加务实的作风、更有成效的行动、更加良好的姿态，带领广大群众，坚定不移走好中国特色社会主义道路，不断创造美好新未来。");
            $("#content2").text("");
            break; 
        case 3:
            $("#title").text("永远跟党走");
            $("#content1").text("胸怀千秋伟业，恰是百年风华。行走在全面建设社会主义现代化国家的新征程上，我们更应该以组织开展“永远跟党走”群众性主题实践活动为契机，从百年党史中厚植坚定的信仰信念、扛起为民服务的使命担当、汲取奋斗前行的磅礴力量，更加坚定“永远跟党走”信心信念，团结带领广大群众团结一心、实干苦干、接力奋进，以优异成绩向党的百年华诞献礼，以推动改革发展的新奇迹诠释共产党人的初心使命。");
            $("#content2").text("");
            break;
        case 4:
            $("#title").text("永远跟党走");
            $("#content1").text("全面从严治党，永葆“永远跟党走”的干净廉洁。党的十八大以来，党中央身体力行、率先垂范，坚持思想建党、组织建党和制度治党紧密结合，集中整饬党风，严厉惩治腐败，净化党内政治生态，从抓思想、抓管党、抓执纪、抓治吏、抓作风、抓反腐六个重点方面推进全面从严治党。经过几年努力，全面从严治党取得显著成效，党内正气在上升，党风在好转，社会风气在上扬。在新的历史条件下，进行具有许多新的历史特点的伟大斗争，推进中国特色社会主义伟大事业，必须以更大力度推进党的建设新的伟大工程，坚定不移推进全面从严治党，认真贯彻执行《关于新形势下党内政治生活的若干准则》《中国共产党党内监督条例》，切实把党建设好、管理好，保持党的先进性和纯洁性，增强党的创造力凝聚力战斗力，提高党的领导水平和执政水平，确保党始终成为中国特色社会主义事业的坚强领导核心，为实现富强民主文明和谐美丽的社会主义现代化强国奋斗目标和中华民族伟大复兴的中国梦提供根本保证。");
            $("#content2").text("");
            break; 
        case 5:
            $("#title").text("永远跟党走");
            $("#content1").text("牢记殷切嘱托，勇挑“永远跟党走”的历史担当。回顾党的百年光辉历程，我们党矢志不渝地践行为中国人民谋幸福、为中华民族谋复兴的初心使命，迎难而上、担当作为，永葆斗争精神，审时度势、科学决策，战胜了前进道路上的各种困难，取得了一个又一个胜利。历史车轮滚滚向前，时代潮流浩浩荡荡。我们的道路越走越宽广、越走越光明。经过几代人的接续奋斗和长期努力，全面建成小康社会取得伟大历史性成就，全面建设社会主义现代化国家新征程顺利开启。一代人有一代人的使命。让我们担负“永远跟党走”的历史使命，做历史洪流中的坚定者、奋进者和搏击者，沿着中国特色社会主义这条正确道路坚定不移走下去，朝着实现中华民族伟大复兴的中国梦奋勇前进。");
            break;  
        default:
            $("#title").text("永远跟党走");
            $("#content1").text("当前，面对世界百年未有之大变局，我们党面临的“四大考验”是长期的和复杂的，“四种危险”是尖锐的和严峻的。面对波谲云诡的国际形势、复杂敏感的周边环境、艰巨繁重的改革发展稳定任务，我们要战胜来自国内外的各种重大风险挑战，夺取中国特色社会主义新胜利，必须全面加强党的自身建设，必须与时俱进地继承好、发扬好党的革命传统和优良作风，传承好党的红色基因，始终保持革命战争年代那么一股劲、那么一股气、那么一种革命精神，我们党就能够永远立于不败之地。.");
            $("#content2").text("实践是理论之源。坚持真理，需要掌握真理。坚持真理，更需要在实践中不断发展真理。坚持真理，还需要始终保持追求真理的勇气。每一名共产党员，都应当时刻不忘初心、牢记使命，永远在马克思主义伟大真理旗帜指引下不断前行，立足平凡的工作岗位，用自己的辛勤劳动，默默耕耘，让继承和发扬党的革命传统和优良作风不断绽放出新时代的绚丽光彩。 ");
            break; 

        }


        $("#bbp").fadeIn(800);

      
        currentNum+=1;
        if(currentNum==7) {
            currentNum=1;
        }

       
    }

});