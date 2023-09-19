plugins {
    java
}

repositories {
    mavenCentral()
    maven(url = "https://dl.equo.dev/sdk/mvn/release")
}

dependencies {
    implementation("com.equo:com.equo.starter.bom:+")
}

group = "sample-name"
version = property("version").toString()
