package com.movile.summit.spark.view

import com.google.gson.Gson

class MyApplicationViewImpl : MyApplicationView {
    val gson = Gson()

    override fun render(model: Any?): String {
        return gson.toJson(model)
    }
}