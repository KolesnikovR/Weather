import React, { Component } from 'react';
import axios from 'axios';
import './WeatherTable.js'
import WeatherTable from "./WeatherTable";

class App extends Component {
  constructor() {
      super();
      this.state = {
          city: "",
          latitude: "",
          longitude: "",
          weather: []
      }
  }

  setValue(field, event) {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  formSend(e) {
      e.preventDefault();
      let params = {
          appid: 'b9f8a9089dc4a32644521fbe7b1ac4a7'
      };
      if (this.state.latitude !== "" && this.state.longitude !== "") {
          params['lat'] = this.state.latitude;
          params['lon'] = this.state.longitude;
      } else if (this.state.city !== "") {
          params['q'] = this.state.city;
      }
      
      axios.get('http://api.openweathermap.org/data/2.5/weather', {
          params: params
      }).then(res => {
            this.setState({
                weather: {
                    temperature: Math.round(res.data.main.temp - 273),
                    humidity: res.data.main.humidity,
                    wind: res.data.wind
                }
            });
        }).catch(function (error) {
            console.log(error);
        });
  }

  render() {
    return (
        <div className="App mx-auto col-md-11">
            <section className="mx-auto col-md-12">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="city">Город</label>
                        <input className="form-control" id="city" name="city"
                               type="text" onChange={this.setValue.bind(this, 'city')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="latitude">Широта</label>
                        <input className="form-control" id="latitude" name="latitude"
                               type="text" onChange={this.setValue.bind(this, 'latitude')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="longitude">Долгота</label>
                        <input className="form-control" id="longitude" name="longitude"
                               type="text" onChange={this.setValue.bind(this, 'longitude')} />
                    </div>
                    <button className="btn btn-primary" name="submit" type="submit" onClick={e => {this.formSend(e)}}>
                        Запросить погоду
                    </button>
                </form>
            </section>
            <section className="table-responsive">
                { Object.keys(this.state.weather).length !== 0  && <WeatherTable weather={this.state.weather}/>}
            </section>
        </div>
    );
  }
}

export default App;
