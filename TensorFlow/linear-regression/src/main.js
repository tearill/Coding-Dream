import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'
import { callbacks } from '@tensorflow/tfjs'

window.onload = async () => {
  // 1. 数据
  const xs = [1, 2, 3, 4] // input
  const ys = [1, 3, 5, 7] // input

  tfvis.render.scatterplot( // 可视化散点图
    {
      name: '数据集',
    },
    {
      values: xs.map((x, i) => { // map 生成嵌套对象数组
        return {
          x,
          y: ys[i]
        }
      })
    }
  )

  const model = tf.sequential() // 新建模型
  // 单层单个 神经元
  model.add(tf.layers.dense({
    units: 1,
    inputShape: 1 
  }))
  // 损失函数 告诉模型错了 错的有多离谱
  // MSD 均方误差
  // optimizer: 优化器 -> 怎么调整，调整多少
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1)
  })
  // 数据转换一下
  const input = tf.tensor(xs), label = tf.tensor(ys)
  // 开始让机器学习
  await model.fit(input, label, {
    batchSize: 4, // 每一批数字的大小，每次学习多少个
    epochs: 100, // 学习多少轮
    // 超参数：动态调整，
    callbacks: tfvis.show.fitCallbacks(
      {
        name: '训练过程',
      },
      ['loss'] // 损失
    )
  })

  const output = model.predict(tf.tensor([5]))
  console.log(output.dataSync())
}