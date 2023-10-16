class WaitInterest {
  getInfo() {
    return {
      id: 'jwklongwaitinterest',
      name: 'Wait Interest',
      color1: '#2519ff',
      color2: '#4f48cf',
      blocks: [
        {
          opcode: 'setExpire',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set expiry of [WAIT] to [TIME] milliseconds',
          disableMonitor: true,
          arguments: {
            WAIT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "abc"
            },
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1000
            }
          }
        },
      ],
    }
  }

  expiries: {}

  setExpire(args) {
    expiries[args.WAIT] = Date.now() + args.TIME
  }
}
Scratch.extensions.register(new WaitInterest())
