//index.js
Page({
  data: {
    entities: [
      {
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749449769,4010996232&fm=26&gp=0.jpg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1417934655,3850219143&fm=26&gp=0.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783052644,2207831672&fm=26&gp=0.jpg',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749449769,4010996232&fm=26&gp=0.jpg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1417934655,3850219143&fm=26&gp=0.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783052644,2207831672&fm=26&gp=0.jpg',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749449769,4010996232&fm=26&gp=0.jpg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1417934655,3850219143&fm=26&gp=0.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783052644,2207831672&fm=26&gp=0.jpg',
        title: 'C',
        description: 'cc'
      }
    ]
  },
  onLoad() {
    console.log('onLoad');
  },
  onReachBottom() {
    // console.log('触底了');
    const data = [...this.data.entities, ...this.data.entities];
    this.setData({
      entities: data
    })
  }
})