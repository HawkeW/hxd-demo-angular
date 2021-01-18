import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  	const heroes = [
  	  { id: 11, name: '好好博士' },
	  { id: 12, name: '纳寇' },
	  { id: 13, name: '爆裂骑士' },
	  { id: 14, name: '辛德瑞拉' },
	  { id: 15, name: '凯恩斯' },
	  { id: 16, name: '橡皮人' },
	  { id: 17, name: 'Dynama' },
	  { id: 18, name: '智商博士' },
	  { id: 19, name: 'MAGA!' },
	  { id: 20, name: '鱼雷人' }
  	]
  	return {heroes};
  }
  
  genId(heroes: Hero[]): number {
  	return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
