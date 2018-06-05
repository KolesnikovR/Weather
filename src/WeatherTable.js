import React, { Component } from 'react';

class WeatherTable extends Component {
    static windDirection (degrees) {
        if (degrees < 45) {
            return "C";
        } else if (degrees < 90) {
            return "СВ";
        } else if (degrees < 125) {
            return "В";
        } else if (degrees < 180) {
            return "ЮВ";
        } else if (degrees < 225) {
            return "Ю";
        } else if (degrees < 270) {
            return "ЮЗ";
        } else if (degrees < 315) {
            return "З";
        } else if (degrees < 360) {
            return "СЗ";
        } else {
            return "-"
        }
    }

    render() {
        return (
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <th className="text-center">Температура</th>
                        <th className="text-center">Влажность</th>
                        <th className="text-center">Направление ветра</th>
                        <th className="text-center">Скорость ветра</th>
                    </tr>
                    <tr>
                        <td className="text-center">{ this.props.weather.temperature }°C</td>
                        <td className="text-center">{ this.props.weather.humidity } %</td>
                        <td className="text-center">{ WeatherTable.windDirection(this.props.weather.wind.deg) }</td>
                        <td className="text-center">{ this.props.weather.wind.speed } м/с</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default WeatherTable;
