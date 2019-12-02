var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21765024",
        "ok": "21756043",
        "ko": "8981"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3109",
        "ok": "2482",
        "ko": "3109"
    },
    "meanResponseTime": {
        "total": "125",
        "ok": "125",
        "ko": "160"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "305"
    },
    "percentiles1": {
        "total": "107",
        "ok": "107",
        "ko": "61"
    },
    "percentiles2": {
        "total": "186",
        "ok": "186",
        "ko": "213"
    },
    "percentiles3": {
        "total": "313",
        "ok": "313",
        "ko": "488"
    },
    "percentiles4": {
        "total": "434",
        "ok": "434",
        "ko": "1803"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21738379,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1077,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16587,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8981,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36275.04",
        "ok": "36260.072",
        "ko": "14.968"
    }
},
contents: {
"req_postuser-2e548": {
        type: "REQUEST",
        name: "postUser",
path: "postUser",
pathFormatted: "req_postuser-2e548",
stats: {
    "name": "postUser",
    "numberOfRequests": {
        "total": "10889504",
        "ok": "10880523",
        "ko": "8981"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3109",
        "ok": "2482",
        "ko": "3109"
    },
    "meanResponseTime": {
        "total": "127",
        "ok": "127",
        "ko": "160"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "117",
        "ko": "305"
    },
    "percentiles1": {
        "total": "109",
        "ok": "109",
        "ko": "61"
    },
    "percentiles2": {
        "total": "188",
        "ok": "188",
        "ko": "213"
    },
    "percentiles3": {
        "total": "317",
        "ok": "317",
        "ko": "488"
    },
    "percentiles4": {
        "total": "440",
        "ok": "440",
        "ko": "1803"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10871427,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 679,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8417,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8981,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18149.173",
        "ok": "18134.205",
        "ko": "14.968"
    }
}
    },"req_getuser-a8428": {
        type: "REQUEST",
        name: "getUser",
path: "getUser",
pathFormatted: "req_getuser-a8428",
stats: {
    "name": "getUser",
    "numberOfRequests": {
        "total": "10875520",
        "ok": "10875520",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2369",
        "ok": "2369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "309",
        "ok": "309",
        "ko": "-"
    },
    "percentiles4": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10866952,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 398,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8170,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18125.867",
        "ok": "18125.867",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
