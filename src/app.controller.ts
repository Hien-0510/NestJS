import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/Calculator/:a/:b/:op')
  getCalculator(@Param('a') a: string, @Param('b') b: string, @Param('op') op: string) {
    console.log(a);
    console.log(b);
      return this.appService.getCalculator(parseFloat(a), parseFloat(b), op);
  }

  @Get('/Calculators')
  getCalculators(@Query('a') a: string, @Query('b') b: string, @Query('op') op: string) {
    console.log(a);
    console.log(b);
      return this.appService.getCalculator(parseFloat(a), parseFloat(b), op);
  }
  
  @Get('/db')
  getDb(){
    return this.appService.getDb();
  }
}
 