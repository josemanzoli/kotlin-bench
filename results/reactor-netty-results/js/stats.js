var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10013459",
        "ok": "7860747",
        "ko": "2152712"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "78941",
        "ok": "43949",
        "ko": "78941"
    },
    "meanResponseTime": {
        "total": "1031",
        "ok": "110",
        "ko": "4394"
    },
    "standardDeviation": {
        "total": "4016",
        "ok": "560",
        "ko": "7711"
    },
    "percentiles1": {
        "total": "95",
        "ok": "69",
        "ko": "2447"
    },
    "percentiles2": {
        "total": "286",
        "ok": "134",
        "ko": "3637"
    },
    "percentiles3": {
        "total": "3720",
        "ok": "282",
        "ko": "16047"
    },
    "percentiles4": {
        "total": "17458",
        "ok": "417",
        "ko": "47737"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7842494,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3002,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15251,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2152712,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16689.098",
        "ok": "13101.245",
        "ko": "3587.853"
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
        "total": "5936431",
        "ok": "3932002",
        "ko": "2004429"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "78941",
        "ok": "43949",
        "ko": "78941"
    },
    "meanResponseTime": {
        "total": "1515",
        "ok": "114",
        "ko": "4262"
    },
    "standardDeviation": {
        "total": "4715",
        "ok": "564",
        "ko": "7337"
    },
    "percentiles1": {
        "total": "136",
        "ok": "69",
        "ko": "2428"
    },
    "percentiles2": {
        "total": "1543",
        "ok": "135",
        "ko": "3597"
    },
    "percentiles3": {
        "total": "4153",
        "ok": "285",
        "ko": "15338"
    },
    "percentiles4": {
        "total": "23206",
        "ok": "436",
        "ko": "45108"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3916678,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2555,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12769,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2004429,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9894.052",
        "ok": "6553.337",
        "ko": "3340.715"
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
        "total": "4077028",
        "ok": "3928745",
        "ko": "148283"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "7"
    },
    "maxResponseTime": {
        "total": "78941",
        "ok": "43830",
        "ko": "78941"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "107",
        "ko": "6174"
    },
    "standardDeviation": {
        "total": "2528",
        "ok": "556",
        "ko": "11492"
    },
    "percentiles1": {
        "total": "72",
        "ok": "69",
        "ko": "2721"
    },
    "percentiles2": {
        "total": "147",
        "ok": "133",
        "ko": "3891"
    },
    "percentiles3": {
        "total": "375",
        "ok": "279",
        "ko": "26331"
    },
    "percentiles4": {
        "total": "3831",
        "ok": "402",
        "ko": "62601"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3925816,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 447,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2482,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 148283,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6795.047",
        "ok": "6547.908",
        "ko": "247.138"
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
