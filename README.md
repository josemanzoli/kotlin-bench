# README #

## What is this repository for? ##

Benchmark of frameworks using Kotlin and one project using GO in order to have a basic benchmark of performance between JVM based frameworks X GO

<p>All the Api's have two endpoints:<br /> 
A POST endpoint that receives a username and a password, store at a list in memory and returns the User created with an ID <br />
A GET enpoint that returns a User based in a path param ID 
</p>  

* __go__: Simple REST Api written in Go using [gorilla/mux](https://github.com/gorilla/mux) and [net/http](https://golang.org/pkg/net/http/) 
* __javalin__: Simple REST Api written in Kotlin using [javalin](https://javalin.io/)
* __reactor-netty__: Simple Reactive REST Api written in Kotlin using [reactor-netty](https://github.com/reactor/reactor-netty)
* __spark__: Simple REST Api written in Kotlin using [sparkjava](http://sparkjava.com/)
* __spring-webflux__: Simple Reactive REST Api written in Kotlin using [spring_webflux](https://spring.io/)
* __spring__: Simple REST Api written in Kotlin using [spring-boot](https://spring.io/)
* __results__: HTML results from Gatling

### How do I get set up? ###

#### Requirements ####

* [JDK11 Amazon Correto](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html)
* If you like to use your own installation of [Gradle](https://gradle.org/), otherwise just use the wrapper that is included inside each project
* [Jmeter](https://jmeter.apache.org/download_jmeter.cgi)
* [Gatling](https://gatling.io/open-source/)
* [GO 1.13](https://golang.org/dl/)

#### Clone and Build ####

Just clone this repository and start to build all the projects for you to be able to run the Jmeter or Gatling scripts

#### How to Build the projects ####

Just execute the build script. 
```
$ cd $HOME/kotlin-bench/
$ sh build-all.sh 
``` 
If you would like to know how to build individually, just take a look at the script.

#### How to run the projects ####

* __go__: just run the executable file and you can use [nohup](https://en.wikipedia.org/wiki/Nohup) in case you don't want to lock your terminal session
```
$ cd $HOME/kotlin-bench/go/
$ ./api-test
```  
* __javalin__, __reactor-netty__, __spark__, __spring-webflux__ and __spring__: Just use java -jar and you can use [nohup](https://en.wikipedia.org/wiki/Nohup) in case you don't want to lock your terminal session
```
$ java -jar $HOME/kotlin-bench/javalin/build/libs/javalin-all-1.0.0-SNAPSHOT.jar
$ java -jar $HOME/kotlin-bench/reactor-netty/build/libs/reactor-netty-1.0.0-SNAPSHOT-all.jar
$ java -jar $HOME/kotlin-bench/spark/build/libs/spark-all-1.0.0-SNAPSHOT.jar
$ java -jar $HOME/kotlin-bench/spring-webflux/build/libs/spring-webflux-1.0.0-SNAPSHOT.jar
$ java -jar $HOME/kotlin-bench/spring/build/libs/spring-1.0-SNAPSHOT.jar
```
#### How to run the benchmark ####

In order to run the benchmark we must have the random username and password data generated. To do that we'll run the file `generate_data.rb`
```
$ ruby generate_data.rb
```
After you run this command above you should have a file named `data.csv` created inside the folder. We'll use this file to run our benchmark.

#### Running using Jmeter ####

Start one of the API's. The API will listen to requests at `localhost:61543/users`

Using Jmeter command line listed bellow, start the `benchmark.jmx` script and wait till it finish
```
$ JVM_ARGS="-Xms1024m -Xmx2048m -XX:NewSize=512m -XX:MaxNewSize=1024m"  && export JVM_ARGS && $JMETER_HOME/bin/jmeter -n -t benchmark-test.jmx -l testresults.jtl
```

The result will be available at `testresults.jtl` file.

In order to see the compilation of the results, open Jmeter in GUI mode (double click to `jmeter` located at bin folder) and open the `benchmark.jmx` test plan. After that you will be able to go to Summary Report and browse to the file `testresults.jtl` and all the information will be resumed in the table located in this report.

#### Running using Gatling ####

First you'll have to copy the file `kotlinBenchSimulation.scala` to the gatling simulations folder and the `data.csv` file to the gatling resources folder  
```
$ mkdir $GATLING_HOME/user-files/simulations/kotlinbench

$ cp kotlinBenchSimulation.scala $GATLING_HOME/user-files/simulations/kotlinbench/
$ cp data.csv $GATLING_HOME/user-files/resources/
```

Start one of the API's. The API will listen to requests at `localhost:61543/users`

Start the Gatling script
```
$ sh $GATLING_HOME/bin/gatling.sh
```
Choose the kotlinBenchSimulation number or hit enter if you have only our simulation located at user-files

### Contribution guidelines ###

* Writing tests - 
  Feel free to contribute
* Code review - 
  Feel free to contribute
* Other contributions - 
  Feel free to contribute with anything that you want!!! 

### Who do I talk to? ###

* Repo owner or admin
  josemanzoli
* Other community or team contact
  Well, it`s just me for now!