# README #

## What is this repository for? ##

Benchmark of frameworks using Kotlin and one project using GO in order to have a basic benchmark of performance between JVM based frameworks X GO

* __go__: Simple REST Api written in Go using [gorilla/mux](https://github.com/gorilla/mux) and [net/http](https://golang.org/pkg/net/http/) 
* __javalin__: Simple REST Api written in Kotlin using [javalin](https://javalin.io/)
* __reactor-netty__: Simple Reactive REST Api written in Kotlin using [reactor-netty](https://github.com/reactor/reactor-netty)
* __spark__: Simple REST Api written in Kotlin using [sparkjava](http://sparkjava.com/)
* __spring-webflux__: Simple Reactive REST Api written in Kotlin using [spring_webflux](https://spring.io/)
* __spring__: Simple REST Api written in Kotlin using [spring-boot](https://spring.io/)
* __results__: HTML results from Gatling


Requirements
------------

* [JDK11 Amazon Correto](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html)
* [Gradle](https://gradle.org/)
* [Jmeter](https://jmeter.apache.org/download_jmeter.cgi)
* [Gatling](https://gatling.io/open-source/)
* [GO 1.13](https://golang.org/dl/)

