package com.movile.summit.spring.view

import com.movile.summit.spring.model.User
import org.springframework.web.bind.annotation.*
import java.util.*
import java.util.concurrent.ConcurrentHashMap

@RestController
@RequestMapping("users")
class UserController {

    val users = ConcurrentHashMap<String, User>()

    @PostMapping
    fun createUser(@RequestBody newUser: User) : String {
        val user = User(id = UUID.randomUUID().toString(),
            username = newUser.username,
            password = newUser.password)
        users.put(user.id!!, user)
        return user.id
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id : String) : User {
        return users.getOrDefault(id, User("not found", "not found", "not found"))
    }
}