import React from "react";
import "../SidebarLeft.css";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
// import AlarmIcon from "@mui/icons-material/Alarm";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Airplay from "@material-ui/icons/Airplay";
// import SmartScreenIcon from "@mui/icons-material/icons/Timeline";

import SidebarLeftRow from "./SidebarRightRow";
import {
  ContactSupportOutlined,
  SupervisedUserCircleTwoTone,
} from "@material-ui/icons";

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
    };
  }

  onCollapse = () => {
    alert("hello");
  };

  showVirtual = () => {
    alert("virtual");
  };

  componentDidMount() {
    fetch("https://v3.football.api-sports.io/countries", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "2b78ff358adf4edf14a72990fef65e9d",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.response);
          this.setState({ isLoaded: true, countries: result.response });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }
  render() {
    const { error, isLoaded, countries } = this.state;

    return (
      <div className="sidebar">
        <div>
          <div className="sidebar__select">
            <select name="sports" id="">
              <option value="football"> Football</option>
              <option value="football"> Basktball</option>
              <option value="football"> Tennis</option>
            </select>
          </div>

          <SidebarLeftRow Icon={HomeIcon} name="Home" selected />
          <SidebarLeftRow Icon={TimelineIcon} name="Live" />
          <SidebarLeftRow Icon={HomeIcon} name="jackpot" />
          <SidebarLeftRow Icon={HomeIcon} name="upcoming" />
          <SidebarLeftRow
            Icon={Airplay}
            name="Virtual"
            onClick={this.showVirtual}
          />
          <SidebarLeftRow Icon={HomeIcon} name="Popular" />
        </div>

        <div className="popular_coutries">
          <div className="heading">
            <h1 className="popular_countries__title">popular countries</h1>
            <KeyboardArrowDownIcon
              className="arrow_down_icon"
              onClick={this.onCollapse}
            />
          </div>
          {error ? (
            <p>Error: {error.message}</p>
          ) : !isLoaded ? (
            <p>Loading</p>
          ) : (
            <div>
              {countries.map((country, index) => {
                if (index < 9) {
                  return (
                    <div className="countries">
                      <span>
                        <img className="flag_img" src={country.flag} alt="" />
                      </span>
                      <p className="country_name">{country.name}</p>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SidebarLeft;
