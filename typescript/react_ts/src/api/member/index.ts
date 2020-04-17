import { members } from './mockData';
import { MemberEntity } from '../../model';

// 类型约束，一定返回一个 promise 要声明 resolve 的数据类型
const fetchMembers = ():Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}

export const memberAPI = {
  fetchMembers
}