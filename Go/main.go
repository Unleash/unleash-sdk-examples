package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/Unleash/unleash-client-go/v4"
	"github.com/joho/godotenv"
)

const FlagName = "example-flag"

func main() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	unleash.Initialize(
		unleash.WithListener(&unleash.DebugListener{}),
		unleash.WithAppName("codesandbox-go"),
		unleash.WithUrl(os.Getenv("UNLEASH_API_URL")),
		unleash.WithCustomHeaders(http.Header{"Authorization": {os.Getenv("UNLEASH_API_TOKEN")}}),
		unleash.WithRefreshInterval(15*time.Second),
		unleash.WithMetricsInterval(5*time.Second),
	)

	timer := time.NewTimer(1 * time.Second)

	for {
		<-timer.C
		fmt.Printf("\033[32m'%s' enabled? %v\033[0m\n", FlagName, unleash.IsEnabled(FlagName))
		timer.Reset(3 * time.Second)
	}
}
