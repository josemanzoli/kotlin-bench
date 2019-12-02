var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10071494",
        "ok": "7367648",
        "ko": "2703846"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60629",
        "ok": "7811",
        "ko": "60629"
    },
    "meanResponseTime": {
        "total": "1363",
        "ok": "705",
        "ko": "3156"
    },
    "standardDeviation": {
        "total": "1580",
        "ok": "440",
        "ko": "2091"
    },
    "percentiles1": {
        "total": "932",
        "ok": "737",
        "ko": "3189"
    },
    "percentiles2": {
        "total": "1424",
        "ok": "1033",
        "ko": "3861"
    },
    "percentiles3": {
        "total": "4202",
        "ok": "1379",
        "ko": "5959"
    },
    "percentiles4": {
        "total": "6729",
        "ok": "1538",
        "ko": "8448"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4049575,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2246388,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1071685,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 2703846,
    "percentage": 27
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16785.823",
        "ok": "12279.413",
        "ko": "4506.41"
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
        "total": "6390168",
        "ok": "3686322",
        "ko": "2703846"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60629",
        "ok": "7811",
        "ko": "60629"
    },
    "meanResponseTime": {
        "total": "1745",
        "ok": "711",
        "ko": "3156"
    },
    "standardDeviation": {
        "total": "1850",
        "ok": "443",
        "ko": "2091"
    },
    "percentiles1": {
        "total": "1085",
        "ok": "743",
        "ko": "3189"
    },
    "percentiles2": {
        "total": "2799",
        "ok": "1037",
        "ko": "3862"
    },
    "percentiles3": {
        "total": "4716",
        "ok": "1388",
        "ko": "5957"
    },
    "percentiles4": {
        "total": "7492",
        "ok": "1555",
        "ko": "8448"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2014633,
    "percentage": 32
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1123456,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 548233,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 2703846,
    "percentage": 42
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10650.28",
        "ok": "6143.87",
        "ko": "4506.41"
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
        "total": "3681326",
        "ok": "3681326",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2014",
        "ok": "2014",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "percentiles1": {
        "total": "731",
        "ok": "731",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1030",
        "ok": "1030",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1370",
        "ok": "1370",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1520",
        "ok": "1521",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2034942,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1122932,
    "percentage": 31
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 523452,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6135.543",
        "ok": "6135.543",
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
