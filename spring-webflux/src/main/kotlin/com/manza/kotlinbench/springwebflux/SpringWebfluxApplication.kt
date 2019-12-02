package com.manza.kotlinbench.springwebflux

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

@SpringBootApplication
class SpringWebfluxApplication

fun main(args: Array<String>) {
    runApplication<SpringWebfluxApplication>(*args)
}

@RestController
@RequestMapping("users")
class UserController {

    val users = ConcurrentHashMap<String, User>()

    @PostMapping
    fun createUser(@RequestBody newUser: User): Mono<User> {
        return Mono
                .just(newUser.copy(id = UUID.randomUUID().toString()))
                .doOnNext {
                    users.put(it.id!!, it)
                }
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: String): Mono<User> {
        return Mono.just(users.getOrDefault(id, User("not found", "not found", "not found")))
    }
}

data class User(
        val id: String? = "not found",
        val username: String,
        val password: String
)
