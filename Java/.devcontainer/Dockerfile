# Use the Java 17 devcontainer image as the base
FROM mcr.microsoft.com/devcontainers/java:0-17

# Install Maven
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean

WORKDIR /root
