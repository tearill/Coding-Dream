import * as React from 'react';
import { MemberEntity } from '../model';

interface Props {
  member: MemberEntity
}
interface State {}

export class MemberRow extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.member, '-------');
    return (
      <tr>
        <td>
          <img src={this.props.member.avatar_url} alt=""/>
        </td>
        <td>{this.props.member.id}</td>
        <td>{this.props.member.login}</td>
      </tr>
    )
  }
}

// export class MemberRow extends React.Component<{member: MemberEntity}> {
//   constructor(props) {
//     super(props);
//   }
//   public render() {
//     console.log(this.props.member, '-------');
//     return (
//       <tr>
//         <td>
//           <img src={this.props.member.avatar_url} alt="用户头像"/>
//         </td>
//         <td>
//           {this.props.member.id}
//         </td>
//         <td>
//           {this.props.member.login}
//         </td>
//       </tr>
//     )
//   }
// }

// export const MemberRow: React.StatelessComponent<{member: MemberEntity}> = ({ member }) => {
//   console.log(member);
//   return (
//     <tr>
//       <td>
//         <img src={member.avatar_url} alt="用户头像"/>
//       </td>
//       <td>
//         {member.id}
//       </td>
//       <td>
//         {member.login}
//       </td>
//     </tr>
//   )
// }
