import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
  members: MemberEntity[],
  fetchMembers(): void // 函数 返回值为空
}

export class MembersPage extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = { members: [] }
  }

  public componentDidMount() {
    this.props.fetchMembers()
  }

  public render() {
    return (
      <div className="row">
        <h2>MembersPage</h2>
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Login</th>
            <th>Avatar</th>
          </tr>
          <tbody>
            {
              this.props.members
            }
          </tbody>
        </table>
      </div>
    )
  }
}
