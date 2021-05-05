import { People } from './people'

class Student extends People {
  constructor(name, height, weight, sno, subject) {
    super(name, height, weight)
    this.subject = subject
    this.sno =sno
  }

  study () {
    console.log(`My Student No. is ${this.sno}. I am Study ${this.subject}`)
  }
}

export { Student }