lineChart = {
    wrapperId: "",
    data: [],
    width: 800,
    height: 400,
    initAxisSpace: 20,
    axisColor: "#000",
    pointRadius: "3",
    lineColor: "#37A2DA",
    strokeWidth: "2",
    chart: null,
    x0: 0,
    y0: 0,
    xAxis: 0,
    yAxis: 0,
    pointSpace: 0,
    pxDataRatio: 0,
    init: function () {
        this.x0 = 10;
        this.y0 = this.height - 10;
        this.xAxis = this.width - this.initAxisSpace;
        this.yAxis = this.height - this.initAxisSpace;
        this.chart = document.createElement("canvas");
        this.chart.setAttribute("width", this.width);
        this.chart.setAttribute("height", this.height);
        this.chart.innerHTML = "A drawing of a line chart.";

        var context;

        context = this.chart.getContext("2d");
        context.strokeStyle = this.axisColor;
        context.beginPath();
        context.moveTo(this.x0, this.y0);
        context.lineTo(this.x0, this.y0-this.yAxis);
        context.moveTo(this.x0, this.y0);
        context.lineTo(this.x0+this.xAxis, this.y0);
        context.stroke();
    },
    drawSingle: function () {
        var context,
            pointSpace,
            pxDataRatio;

        pointSpace = this.pointSpace || parseInt(this.xAxis/this.data.length);
        pxDataRatio = this.pxDataRatio || this.yAxis / Math.max.apply(null, this.data);
        context = this.chart.getContext("2d");
        context.fillStyle = this.lineColor;
        context.strokeStyle = this.lineColor;
        context.lineWidth = this.strokeWidth;

        var i,
            x,
            y,
            tx,
            ty;

        for (x = this.x0, i = 0; i < this.data.length; i++, x += pointSpace) {
            y = this.y0 - this.data[i] * pxDataRatio;
            context.beginPath();
            context.arc(x, y, this.pointRadius, 0, 2*Math.PI, false);
            if (i) {
                context.moveTo(tx, ty);
                context.lineTo(x, y);
            }
            context.stroke();
            context.fill();
            tx = x;
            ty = y;
        }
    },
    setSingle: function (data) {
        this.init();
        this.data = data;
        this.drawSingle();
        document.querySelector("#"+this.wrapperId).appendChild(this.chart);
    },
    setGroup: function (arrayOfData, arrayOfColor) {
        var maxVal,
            prevColor,
            prevRatio,
            prevSpace;

        maxVal = arrayOfData.map(function (item, index, array) {
            return Math.max.apply(null, item);
        });
        prevColor = this.lineColor;
        prevSpace = this.pointSpace;
        prevRatio = this.pxDataRatio;

        this.init();
        this.pointSpace = parseInt(this.xAxis/arrayOfData[0].length);
        this.pxDataRatio = this.yAxis / Math.max.apply(null, maxVal);

        var i;

        for (i = 0; i < arrayOfData.length; i++) {
            this.data = arrayOfData[i];
            this.lineColor = arrayOfColor[i];
            this.drawSingle();
        }
        document.querySelector("#"+this.wrapperId).appendChild(this.chart);
        this.lineColor = prevColor;
        this.pointSpace = prevSpace;
        this.pxDataRatio = prevRatio;
    }
}
