import { Request, Response } from 'express' // 内置 express 服务

const getTags = (req: Request, res: Response) => {
  // console.log(req, res)
  res.json({
    data: [
      {
        id: 1,
        title: 'Vue'
      },
      {
        id: 2,
        title: 'React'
      },
      {
        id: 3,
        title: 'Antd' // UI 框架
      },
      {
        id: 4,
        title: 'Umi' // 开发框架
      }
    ]
  })
}

export default {
  'GET /api/tag/all': getTags
}