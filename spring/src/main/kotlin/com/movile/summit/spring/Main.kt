package com.movile.summit.spring

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = arrayOf(JacksonAutoConfiguration::class))
class Main

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}