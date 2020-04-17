import * as React from 'react';
import MemberHeader from './memberHeader';
import { MemberRow } from './memberRow';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model';
interface Props {}
interface State {
  members: MemberEntity[]
}

// 内部有数据 Vue -> data | React -> state
export class MemebersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { // Vue data 组件的状态
      members: []
    }
  }

  public componentDidMount() { // Vue mounted
    // ts 虽然多写了些代码，但是会减少很多调试，反而省时间
    memberAPI
      .fetchMembers() // ts java 步步惊心 返回 promise
      .then(members => {
        // console.log(members);
        this.setState({
          members
        })
      })
  }

  // public shouldComponentUpdate() {
  //   return true;
  // }

  public render() { // 必须实现的接口
    return (
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map(member => 
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}