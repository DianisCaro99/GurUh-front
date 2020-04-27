import { Injectable } from '@angular/core';

import { messages } from './messages';
import { botReplies} from './bot-replies';

@Injectable()
export class ChatService {


  loadMessages() {
    return messages;
  }

  loadBotReplies() {
    return botReplies;
  }

  reply(message: string) {
    const botReply: any =  this.loadBotReplies()
      .find((reply: any) => message.search(reply.regExp) !== -1);

    if (botReply.reply.type === 'quote') {
      botReply.reply.quote = message;
    }

    botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
    return { ...botReply.reply };
  }
}
