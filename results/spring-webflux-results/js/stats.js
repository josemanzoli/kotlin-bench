var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10504955",
        "ok": "6024086",
        "ko": "4480869"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "71641",
        "ok": "55585",
        "ko": "71641"
    },
    "meanResponseTime": {
        "total": "1020",
        "ok": "167",
        "ko": "2168"
    },
    "standardDeviation": {
        "total": "3813",
        "ok": "624",
        "ko": "5592"
    },
    "percentiles1": {
        "total": "265",
        "ok": "103",
        "ko": "935"
    },
    "percentiles2": {
        "total": "792",
        "ok": "233",
        "ko": "1648"
    },
    "percentiles3": {
        "total": "3710",
        "ok": "407",
        "ko": "6313"
    },
    "percentiles4": {
        "total": "13931",
        "ok": "560",
        "ko": "23828"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5996910,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7703,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19473,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4480869,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17508.258",
        "ok": "10040.143",
        "ko": "7468.115"
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
        "total": "7407277",
        "ok": "3013020",
        "ko": "4394257"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "71641",
        "ok": "55585",
        "ko": "71641"
    },
    "meanResponseTime": {
        "total": "1332",
        "ok": "175",
        "ko": "2125"
    },
    "standardDeviation": {
        "total": "4349",
        "ok": "655",
        "ko": "5481"
    },
    "percentiles1": {
        "total": "433",
        "ok": "103",
        "ko": "917"
    },
    "percentiles2": {
        "total": "1195",
        "ok": "233",
        "ko": "1630"
    },
    "percentiles3": {
        "total": "4173",
        "ok": "411",
        "ko": "6087"
    },
    "percentiles4": {
        "total": "16446",
        "ok": "605",
        "ko": "22940"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2992621,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4408,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15991,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4394257,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12345.462",
        "ok": "5021.7",
        "ko": "7323.762"
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
        "total": "3097678",
        "ok": "3011066",
        "ko": "86612"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "69116",
        "ok": "53511",
        "ko": "69116"
    },
    "meanResponseTime": {
        "total": "275",
        "ok": "159",
        "ko": "4329"
    },
    "standardDeviation": {
        "total": "1817",
        "ok": "590",
        "ko": "9435"
    },
    "percentiles1": {
        "total": "108",
        "ok": "102",
        "ko": "1622"
    },
    "percentiles2": {
        "total": "245",
        "ok": "232",
        "ko": "3629"
    },
    "percentiles3": {
        "total": "469",
        "ok": "403",
        "ko": "14374"
    },
    "percentiles4": {
        "total": "2601",
        "ok": "536",
        "ko": "63034"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3004289,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3295,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3482,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 86612,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5162.797",
        "ok": "5018.443",
        "ko": "144.353"
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
