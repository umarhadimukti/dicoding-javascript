// Parent class
class MailService {
  constructor(sender) {
      this.sender = sender;
  }
  
  sendMessage(message, receiver) {
      return `${this.sender} was send '${message}' to ${receiver}`;
  }
}

// Child class
class WhatsappService extends MailService {
  getSenderName() {
    return this.sender;
  }

  sendBroadcastMessage(message, receivers) {
      for (let receiver of receivers) {
          return this.sendMessage(message, receiver);
      }
  }
}

// Child class
class EmailService extends MailService {
  sendDelayMessage(message, receiver, delay) {
      setTimeout(() => {
          return this.sendMessage(message, receiver);
      }, delay)
  }
}

whatsapp1 = new WhatsappService('+6289673356109'); // instance of WhatsappService
mail1 = new EmailService('rakayusuf@gmail.com'); // instance of EmailService

console.log(whatsapp1.getSenderName());
console.log(whatsapp1.sendBroadcastMessage('Selamat pagi', ['+6282260817677', '+6281211423942']))

console.log(mail1.sendDelayMessage('Halo', 'umarhadimukti@gmail.com', 3000));
