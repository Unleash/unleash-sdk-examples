package com.example.myapplication
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.ui.unit.sp
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val unleashInstance = (application as MyApplication).unleash

        setContent {
            var flagStatus by remember { mutableStateOf("loading") }
            LaunchedEffect(Unit) {
                while (isActive) {
                    val isFlagEnabled = unleashInstance.isEnabled("example-flag")
                    flagStatus = if (isFlagEnabled) "enabled" else "disabled"
                    delay(3000L)
                }
            }

            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                Text(text = "Flag is $flagStatus!", fontSize = 32.sp)
            }
        }

    }
}
