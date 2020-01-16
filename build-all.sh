#!/bin/bash
PWD=$(pwd)
projects="go javalin reactor-netty spark spring-webflux spring"



build_all(){
for i in $projects; do
    echo "Builing $i"
    if [ "go" == "$i" ]; then
	    build_go $i
    elif [ "javalin" == "$i" ]; then
	    build_fatjar $i
    elif [ "reactor-netty" == "$i" ]; then   
            build_fatjar $i 
    elif [ "spark" == "$i" ]; then
            build_fatjar $i 
    elif [ "spring-webflux" == "$i" ]; then
            build_spring $i 
    elif [ "spring" == "$i" ]; then
            build_spring $i 
    else
	 echo "no build command found for $i"   
    fi 
done
}

build_go(){
    cd $PWD/$1/ && go build ; cd ..
}

build_fatjar(){
    cd $PWD/$1 && ./gradlew clean build fatJar ; cd ..
}

build_spring(){
    cd $PWD/$1 && ./gradlew clean build ; cd ..
}

build_all

