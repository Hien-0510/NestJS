import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tôi tên gì đó';
  }

  getCalculator(a: number, b: number, op: string){
      switch(op){
          case 'cong': return a + b;
          case 'tru': return a - b;
          case 'nhan': return a * b;
          case 'chia': return a / b;
          default: return 'Invalid operator';
      }
  }

  getDb(){
    return process.env.DB_URL;
  }
}
