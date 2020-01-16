package kotlinbench

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class kotlinBench extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:61543") // Here is the root for all relative URLs
    .acceptHeader("application/json") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val feeder = csv("data.csv").random

  val scn = scenario("Users").feed(feeder).repeat(200) {
    exec(
      http("postUser")
        .post("/users")
        .body(StringBody(""" {"username" : "${username}", "password" : "${password}"} """)).asJson
        .check(status.is(200), jsonPath("$.id").saveAs("userId"))
    ).exec(
      http("getUser")
        .get("/users/${userId}")
        .check(status.is(200))
    )
}

  setUp(
    scn.inject(constantUsersPerSec(100) during(600 seconds))).throttle(reachRps(100000) in (100 seconds), holdFor(30 minutes)).maxDuration(10 minutes).protocols(httpProtocol)
}
