document.querySelectorAll('a[data-page]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default click action
    var page = event.target.dataset.page; // Get the page name from the data-page attribute
    showPage(page); // Call the function to show the page
  });
});
 
function showPage(pageName) {
  var content = document.getElementById('content');
  switch(pageName) {
    case 'home':
      content.innerHTML = '<h1 style="text-align: center;">简介</h1><p style="color: red;padding-left: 400px;">品牌名称：聚心擎帜</p><p style="padding-left: 400px; padding-right: 400px;">党支部品牌内涵：“党建领航抓收费、提升服务保畅通”。围绕推进收费运营服务保畅提质增效目标，各党小组扎实开展山临所“聚心擎帜”党支部品牌创建，打造“一党员一盏灯”“一党员一阵地”“一支部一面旗”的“三个一”细化落实收费运营各项工作。</p><p style="padding-left: 400px;padding-right: 400px; ">使命:通过深入开展创建党建品牌活动，依托“1+7+21+78”的党建工作平台，提升学思践悟能力水平。“1”：1个品牌核心，即以党建引领高速运营；“7”：7个特色党小组；“21”：21块党建文化宣传阵地，阵地包括党建文化墙、党员活动室、楼道文化走廊；“78”：78名党员，包含“巾帼文明岗”“党员先锋岗”“青年突击队”，让“红色能量”持续充盈，激励全所广大党员干部职工以更加昂扬的姿态奋进新征程、建功新时代。</p><p style="padding-left: 400px; padding-right: 400px;">愿景：通过党建领航收费，稳步推进收费运营保畅服务提质增效目标，通过“聚心擎帜”党支部品牌创建，加快培育、建成具有亮点突出、快捷便民、公开高效的收费运营保畅服务新模式，为山临高速公路高质量运营发展持续供应“新鲜血液”</p><img id="myImage" src="img/1.jpg" alt="My Image">';

// 获取图片元素
var image = document.getElementById('myImage');
 
// 设置图片位置
image.style.position = 'absolute'; // 绝对定位
image.style.left = '640px'; // 距离左边界50像素
image.style.top = '405px'; // 距离上边界100像素
 
// 设置图片大小
image.style.width = '600px'; // 宽度200像素
image.style.height = '480px'; // 高度150像素

      break;
    case 'about':
      content.innerHTML = '<h1>领导机构</h1>';
      break;
    case 'contact':
      content.innerHTML = '<h1>为民服务</h1>';
      break;
case 'dashiji':
      content.innerHTML = '<h1>大事记</h1>';
      break;
case 'shujufenxi':
      content.innerHTML = '<h1>数据分析</h1>';
      break;
case 'map':
      content.innerHTML = '<h1>辖区地图</h1>';
      break;

    default:
      content.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}