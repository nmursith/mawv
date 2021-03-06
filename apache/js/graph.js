

Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Physics Marks'
    },
    subtitle: {
        text: 'Source: VISION Exam'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
	min:0,
	max :100,
        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Marks',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
	min:0,
	max :100,
        title: {
            text: 'Marks',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Marks-Bar',
        type: 'column',
        yAxis: 1,
        data: [100, 90,99],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Marks-Line',
        type: 'spline',
        data: [100, 90,99],
        tooltip: {
            valueSuffix: ''
        }
    }]
});








Highcharts.chart('container1', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Attendance'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Attendance',
        data: [
            ['Attended', 90.0],

            {
                name: 'Absent',
                y: 10,
                sliced: true,
                selected: true
            },

        ]
    }]
});
