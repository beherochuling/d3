var data = [30, 86, 168, 281, 303, 365];

var scale = d3.scale.linear() // 线性
  .domain([0, 365]) // 值范围
  .range([0, 300]) // 像素范围

d3.select(".chart") // 选择
  .selectAll("div") // 选择所有
  .data(data) // 数据
    .enter()
    .append("div")
    .style("width", function(d) { return scale(d) + "px"; }) // 样式
    .text(function(d) { return d; }); // 文本
