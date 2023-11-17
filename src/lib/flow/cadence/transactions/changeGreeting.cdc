import "HelloWorld"

transaction(newGreeting: String) {
  prepare(signer: AuthAccount) {

  }

  execute {
    HelloWorld.changeGreeting(newGreeting: newGreeting)
  }
}