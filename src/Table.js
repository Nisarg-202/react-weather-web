import React from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

function Table({weather}) {
  return (
    <div>
      <div className="row text-center my-3">
        <div className="col-3">City</div>
        <div className="col-3">Temperature</div>
        <div className="col-3">Pressure</div>
        <div className="col-3">Humidity</div>
      </div>
      <hr />
      {weather.length > 0 &&
        weather.map(function (item) {
          console.log(item.city);
          return (
            <div className="row text-center my-4" key={item.city.name}>
              <div className="col-3">
                <img
                  src={`https://maps.locationiq.com/v2/staticmap?key=fe0978f0c9630c&center=${item.city.coord.lat},${item.city.coord.lon}&zoom=18&size=200x150`}
                />
              </div>
              <div className="col-3">
                <Sparklines
                  data={item.list.map(function (line) {
                    return line.main.temp;
                  })}
                  width={50}
                  height={30}
                >
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
              <div className="col-3">
                <Sparklines
                  data={item.list.map(function (line) {
                    return line.main.pressure;
                  })}
                  width={50}
                  height={30}
                >
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
              <div className="col-3">
                <Sparklines
                  data={item.list.map(function (line) {
                    return line.main.humidity;
                  })}
                  width={50}
                  height={30}
                >
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(Table);
