import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    const name = `${this.props.info.first_name} ${this.props.info.last_name}`
    const position = this.props.info.position
    const nflTeam = this.props.info.nfl_team
    const fantasyPoints = this.props.info.stats[0].fantasy_points
    const teamId = this.props.info.team_id
    const playerImage = this.props.info.img_src

    return (
      <tr>
       <td><img className="playerImage" src={playerImage} alt="playerImage" /></td>
       <td>{name}</td>
       <td>{position}</td>
       <td><img className="teamLogo" src={nflTeam} alt="playerImage" /></td>
       <td>{fantasyPoints}</td>
       <td>
       <button
         className="button"
         onClick={() => this.props.onClick({playerImage: playerImage, name: name, position: position, nflTeam: nflTeam, fantasyPoints: fantasyPoints, teamId: teamId})}>
         Trade
       </button>
       </td>
    </tr>
    )
  }
}
