package com.example.myapplication

import android.app.Application
import io.getunleash.android.DefaultUnleash
import io.getunleash.android.Unleash
import io.getunleash.android.UnleashConfig

class TestApplication: Application() {
    val unleash: Unleash by lazy {
        val instance = DefaultUnleash(
            androidContext = this,
            unleashConfig = UnleashConfig.newBuilder(appName = "codesandbox-android")
                .proxyUrl("https://eu.app.unleash-hosted.com/demo/api/frontend/")
                .clientKey("demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d")
                .pollingStrategy.interval(10000)
                .metricsStrategy.interval(10000)
                .build()
        )
        instance.start()
        instance
    }

    override fun onTerminate() {
        super.onTerminate()
        unleash.close()
    }
}
