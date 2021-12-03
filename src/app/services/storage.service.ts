import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public query(entityType: string, delay = 1200): Array<any> {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return entities

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // reject('OOOOPs')
    //     resolve(entities)
    //   }, delay)
    // })
    // return Promise.resolve(entities)
  }

  async post(entityType: string, newEntity: any) {
    newEntity.setId()
    const entities: Array<any> = this.query(entityType)
    entities.push(newEntity)
    this.save(entityType, entities)
    return newEntity
  }

  save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
  }

  _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
}
