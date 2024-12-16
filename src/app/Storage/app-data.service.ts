import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { this.init() }

  // initialize wallet
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // set variable with data
  public async set(key: string, value: any) {
    let result = await this._storage?.set(key, value);
    console.log('result: ',result);
    return result
  }

  //
  public async get(key: string) {
    let value = await this._storage?.get(key);
    // console.log(value);
    return value
    
  }

  public async remove(key: string) {
    await this._storage?.remove(key);
    // let value = await this._storage?.remove(key);
    // console.log(result);
  }

  public async clear() {
    await this._storage?.clear();
    // let result = await this._storage?.clear();
    // console.log(result);
  }

  public async keys() {
    let value = await this._storage?.keys();
    // console.log(result);
    return value
  }
}
