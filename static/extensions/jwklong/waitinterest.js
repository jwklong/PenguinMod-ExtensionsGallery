class WaitInterest {
  getInfo() {
    return {
      id: 'jwklongwaitinterest',
      name: 'Wait Interest',
      color1: '#2519ff',
      color2: '#4f48cf',
      blocks: [
        {
          opcode: 'test',
          blockType: Scratch.BlockType.COMMAND,
          text: 'test',
          disableMonitor: true,
        },
      ],
    }
  }

  test() {
    
  }
}
Scratch.extensions.register(new WaitInterest())
