package com.movile.summit.javalin

import com.movile.summit.javalin.model.User
import com.google.gson.Gson
import io.javalin.Javalin
import java.util.*
import java.util.concurrent.ConcurrentHashMap


fun main() {
  val app = Javalin.create().start(8080)
  val gson = Gson()

  val users = ConcurrentHashMap<String, User>()

  app.post("/users") { ctx ->
    val newUser = Gson().fromJson<User>(ctx.body(), User::class.java)
    val user = User(UUID.randomUUID().toString(), newUser.username, newUser.password)
    users[user.id] = user
    ctx.json(user)
  }

  app.get("/users/:id") { ctx ->
    val user = users.getOrDefault(ctx.pathParam("id"), User("not found", "not found", "not found"))
    ctx.json(user.toString())
  }
}