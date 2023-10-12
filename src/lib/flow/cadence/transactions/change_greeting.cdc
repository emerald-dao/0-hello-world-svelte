import HelloWorld from 0xDeployer

transaction(newGreeting: String) {
  prepare(signer: AuthAccount) {

  }

  execute {
    HelloWorld.changeGreeting(newGreeting: newGreeting)
  }
}