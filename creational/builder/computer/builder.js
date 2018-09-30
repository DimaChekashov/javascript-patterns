class Computer {
  constructor(builder) {
    this.motherboard = builder.motherboard;
    this.processor = builder.processor;
    this.memory = builder.memory;
    this.videoCard = builder.videoCard;
    this.hardDrive = builder.hardDrive;
  }
}

class ComputerBuilder {
  constructor() {
    this.motherboard = null;
    this.processor = null;
    this.memory = null;
    this.videoCard = null;
    this.hardDrive = null;
  }

  setMotherboard(motherboard) {
    this.motherboard = motherboard;
    return this;
  }

  setProcessor(processor) {
    this.processor = processor;
    return this;
  }

  setMemory(memory) {
    this.memory = memory;
    return this;
  }

  setVideoCard(videoCard) {
    this.videoCard = videoCard;
    return this;
  }

  setHardDrive(hardDrive) {
    this.hardDrive = hardDrive;
    return this;
  }

  build() {
    const computer = new Computer(this);
  }
}

const computer1 = new ComputerBuilder()
    .setProcessor(new Processor())
    .setMotherboard(new Motherboard())
    .setHardDrive(new HardDrive())
    .setVideoCard(new VideoCard())
    .setMemory(new Memory())
    .build();


const computer2 = new ComputerBuilder()
    .setProcessor(new Processor())
    .setMotherboard(new Motherboard())
    .build();

class Director {
  constructor(builder) {
    this.builder = builder;
  }

  buildExpensiveComputer() {
    this.builder.setProcessor().setMotherboard().setMemory().setVideoCard().setHardDrive();

    return builder.build();
  }

  buildCheapComputer() {
    this.builder.setMotherboard();

    return builder.build();
  }
}

module.exports = {
  ComputerBuilder,
  Director
};