import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    this.parentElement = null;
    this.position = position || {
      lat: 0,
      lon: 0
    };

    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    if (this.position.lat === 0) {
      try {
        const x = await getLocation();
        this.position.lat = x.coords.latitude;
        this.position.lon = x.coords.longitude;
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {

    this.parentElement.innerHTML = '<li>Loading...</li>';
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );

    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    const quake = this.quakes.getQuakeById(quakeId);
    this.quakesView.renderQuake(quake, this.parentElement);
   
  }
}