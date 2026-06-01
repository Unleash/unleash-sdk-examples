package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	unleash "github.com/Unleash/unleash-go-sdk/v6"
	"github.com/joho/godotenv"
)

const FlagName = "example-flag"

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	err = unleash.Initialize(
		unleash.WithAppName("codesandbox-go"),
		unleash.WithUrl(os.Getenv("UNLEASH_API_URL")),
		unleash.WithCustomHeaders(http.Header{"Authorization": {os.Getenv("UNLEASH_API_TOKEN")}}),
	)
	if err != nil {
		log.Fatalf("Error initializing Unleash: %v", err)
	}
	defer unleash.Close()

	unleash.WaitForReady()

	ticker := time.NewTicker(3 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		if unleash.IsEnabled(FlagName, unleash.FeatureOptions{}) {
			fmt.Println(FlagName + " is enabled")
		} else {
			fmt.Println(FlagName + " is disabled")
		}
	}
}
